import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import MapPreview from './MapPreview'
import { maps_api_key } from '../cloudPlattform/googleCloud'
import { setUserLocation } from '../features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import {  usePutUserLocationMutation } from '../services/shopServices'
import { getDistance } from 'geolib';
import { shadowsBox } from '../global/colors' 

const LocationSelector = () => {
    const [location, setLocation] = useState("")
    const [error, setError] = useState("")
    const [address, setAddress] = useState("")
    const localId = useSelector(state=>state.authReducer.localId)
    const [triggerPutUserLocation, result] = usePutUserLocationMutation()
    const [distance, setDistance] = useState("")

    useEffect(() => {
        (async ()=> {
        let {status} = await Location.requestForegroundPermissionsAsync()
        if(status!=="granted"){
            setError("No se han otorgado los permisos para obtener la ubicacion")
            return
        }
        let location = await Location.getCurrentPositionAsync()
        setLocation({latitude: location.coords.latitude, longitude: location.coords.longitude })
        })()
    },[])

    useEffect(() =>{
        (async ()=> {
            try{
                if(location.latitude) {
                    const urlReverseGeocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${maps_api_key}`
                    const response = await fetch(urlReverseGeocode)
                    const data = await response.json() 
                    const formattedAddress = await data.results[0].formatted_address
                    const distance = getDistance (
                        { latitude: location.latitude, longitude: location.longitude },
                        { latitude: location.latitude, longitude: location.longitude+0.01 }
                    );
                    setDistance(distance)
                    setAddress(formattedAddress)
                }
            }catch(error){
                setError(error.message)
            }
        })()
    }, [location])

    const dispatch = useDispatch()

    const onConfirmAddress = () => {
        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address: address,
        }
        dispatch(setUserLocation(locationFormatted))

        triggerPutUserLocation({location:locationFormatted, localId })
    }

    console.log("Result: ", result)


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.textTitle}>Mi ubicacion Actual: </Text>
      {
        location.latitude
        ?
        <>
            <Text style={styles.textAddress}>{address}</Text>
            <Text style={styles.textAddress}>Distancia a la tienda mas cercana: </Text>
            <Text style={styles.textLocation}>
                (Lat: {location.latitude}, Long: {location.longitude})
            </Text>
            <TouchableOpacity style={styles.btn} onPress={onConfirmAddress}>
                <Text style={styles.textBtn}>Actualizar Ubicacion</Text>
            </TouchableOpacity>
            <MapPreview location={location} />
        </>
        :
        <ActivityIndicator />
      }
    </View>
    </ScrollView>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000000',
        ...shadowsBox
    },
    btn: {
        padding: 10,
        backgroundColor: '#96E9C6',
        borderRadius: 5,
        paddingHorizontal: 15,
        marginVertical: 15,
    },
    textBtn: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
    },
    textLocation: {
        fontFamily: 'Roboto-Thin',
        fontSize: 16,
        color: '#000'
    },
    textAddress: {
        color: '#000',
        padding: 10,
    }, 
    textTitle: {
        fontSize: 16,
    }
})
