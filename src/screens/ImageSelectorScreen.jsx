import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native' 
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { setProfilePicture } from '../features/authSlice'
import { usePutProfilePictureMutation } from '../services/shopServices';



const ImageSelectorScreen = ({ navigation }) => {

  const [image, setImage] = useState('')

  const localId = useSelector(state=>state.authReducer.localId)

  const verifyCameraPermissions = async () => {
   const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if(!granted){
      return false
    }
    console.log("Permisos otorgados")
    return true
   }

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions()
    if(isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
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
    navigation.navigate("Perfil")
   }
 
  return (
  
<ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.SelectionContainer}>
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
          <TouchableOpacity style={{ ...styles.btn, ...styles.btnConfirm }} onPress={confirmImage}>
            <Text style={styles.textBtn}>Confirmar</Text>
          </TouchableOpacity>
        </View>
    </View>
    :
    <View style={styles.noImageConatiner}>
      <MaterialIcons name="no-photography" size={100} color="black" />
      <TouchableOpacity style={styles.btn} onPress={pickImage}>
        <Text style={styles.textBtn}>Actualizar Foto de Perfil</Text>
      </TouchableOpacity>
    </View>
      }
      <Text style={styles.textDescription}>
      Bienvenido a la sección de perfil. Aquí, te invitamos a personalizar tu experiencia al añadir una fotografía distintiva. ¡Captura el momento perfecto para reflejar tu personalidad! Toca el botón "Actualizar Foto de Perfil" para iniciar el proceso. Si aún no tienes una foto, no te preocupes, simplemente elige "Tomar Fotografía". ¡Estamos emocionados de ver cómo tu imagen le dará vida a tu perfil!
      </Text>
    </View>
</ScrollView>

  )
}

export default ImageSelectorScreen

const styles = StyleSheet.create({
  SelectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImageConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  btn: {
    backgroundColor: '#96EFFF',
    padding: 12,
    borderRadius: 5,
    marginTop: 50,
    margin: 10,
  },
  textBtn: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 250,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btnConfirm: {
    backgroundColor: '#45FFCA',
    paddingHorizontal: 12,
  },
  textDescription: {
    color: '#000',
    textAlign: 'center',
    padding: 15,
    marginTop: 10,
    fontSize: 18,
  },
});
