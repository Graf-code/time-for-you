import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native' 
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import * as ImagePciker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { setProfilePicture } from '../features/authSlice'
import { usePutProfilePictureMutation } from '../services/shopServices';



const ImageSelectorScreen = () => {

  const [image, setImage] = useState('')

  const localId = useSelector(state=>state.authReducer.localId)

  const verifyCameraPermissions = async () => {
   const { granted } = await ImagePciker.requestCameraPermissionsAsync()
    if(!granted){
      return false
    }
    console.log("Permisos otorgados")
    return true
   }

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions()
    if(isCameraOk) {
      let result = await ImagePciker.launchCameraAsync({
        mediaTypes: ImagePciker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1,1],
        base64: true,
        quality: 0.2
      })
      if(!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
      }
    }else {
      console.log("No se han otorgado permisos para usar la camara")
    }
   }


   const dispatch = useDispatch()

   const [triggerSaverProfilePicture, result] = usePutProfilePictureMutation()

   const confirmImage = () => {
    dispatch(setProfilePicture(image))
    triggerSaverProfilePicture({image, localId})
    navigaion.navigate("Perfil")
   }
 
  return (
    <View style={styles.container}>
    {
      image
      ?
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image}}
          style={styles.image}
          resizeMode="cover"
          />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={pickImage}>
            <Text style={styles.textBtn}>Tomar Otra</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.btn, ...styles.btnConfirm }} onPress={confirImage}>
            <Text style={styles.textBtn}>Confirmar</Text>
          </TouchableOpacity>
        </View>
    </View>
    :
    <View style={styles.noImageConatiner}>
      <MaterialIcons name="no-phtogrphy" size={200} color="#ccc" />
      <TouchableOpacity style={styles.btn} onPress={pickImage}>
        <Text style={styles.textBtn}>Abrir Camara</Text>
      </TouchableOpacity>
    </View>
  }
</View>
  )
}

export default ImageSelectorScreen

const styles = StyleSheet.create({})

// // HORA : 1:20