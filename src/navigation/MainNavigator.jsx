import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfilePicturesQuery } from "../services/shopServices";
import { useEffect } from "react";
import { setProfilePicture, setUserLocation } from "../features/authSlice";
import { useGetUserLocationQuery } from "../services/shopServices";
import { fecthSession } from "../db";


const MainNavigator = () => {
    const user = useSelector(state=>state.authReducer.user)
    const localId = useSelector(state=>state.authReducer.localId)
    const { data, error, isLoading } = useGetProfilePicturesQuery(localId)
    const { data: locationData, error: locationError, isLoading: isLocationLoading } = useGetUserLocationQuery    
    const dispatch = useDispatch()

    useEffect(() => {
        if(data) {
            dispatch(setProfilePicture(data.image))
        }
        if(locationData) {
            dispatch(setUserLocation(locationData))
        }
    }, [data, isLoading, locationData, isLocationLoading])

    useEffect(()=>{
        (async () => {
            try {
                const session = await fecthSession(localId)
                console.log("Sesion del usuario ", session)
                if(session?.rows.length) {
                    console.log("Se han encontrado datos")
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            }catch(error) {
                console.log("Error al obtener datos del usuario: ", error)
            }
        })
    })

    return (
        <NavigationContainer>
            {user && !isLoading ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

export default MainNavigator