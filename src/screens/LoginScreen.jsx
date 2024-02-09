import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import CustomInput from '../components/CustomInput'
import { useLogInMutation } from '../services/authServices'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { insertSession } from '../db'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [triggerLogIn, result] = useLogInMutation()

    const onSubmit = () => {
        triggerLogIn ({ email ,password })
    }

    const dispatch = useDispatch()

    useEffect(()=>{
        if(result.data) {
            dispatch(setUser(result.data))

        insertSession({
            localId: result.data.localId,
            email: result.data.email,
            token: result.data.token
        })
        .then(result=>console.log("Usario insertado correctamente: ", result))
        .catch(error=>console.log("Error al insertar usuario ", error ))
    }
    }, [result]);

    useEffect(() => {
        if (result.isSuccess) {
            console.log("Usuario registrado: ", result.data);
        }
    }, [result]);

  return (
    <View style={styles.container}>
          <Image
        source={require("../../assets/img/logo-time-for-you.png")}
        style={styles.logoImage}
      />
        <CustomInput
            label="Email: "
            onChange={setEmail}
            placeholder="Ingrese su correo electronico"
            style={styles.inputContainer}
            />
        <CustomInput 
            label="Contraseña: "
            onChange={setPassword}
            isSecureEntry={true}
            placeholder="Ingrese su contraseña"
            style={styles.inputContainer}
            />
        <TouchableOpacity style={styles.btn} onPress={onSubmit}>
            <Text style={styles.btnText}>Ingresar</Text> 
        </TouchableOpacity>
        <View style={styles.altContainer}>
            <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
            <TouchableOpacity style={styles.buttonCreateAcount} onPress={() => { navigation.navigate("Signup")}}>
                <Text style={styles.subtitleLink}>Crear una</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },
  btn: {
    padding: 10,
    backgroundColor: '#000',
    margin: 5,
    width: '75%',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },
  buttonCreateAcount: {
    width: '100%',
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  altContainer: {
    flexDirection: 'column',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    width: '75%',
  },
  subtitle: {
    color: '#000',
    fontFamily: 'Roboto-Bold',
    marginBottom: 20,
    fontSize: 16,
  },
  subtitleLink: {
    fontFamily: 'Roboto-Bold',
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 18,
    padding: 8,
    borderRadius: 10,
    textDecorationLine: 'none',
  },
  placeholder: {
    color: '#000000',
  },
  CustomInput: {
    borderBottomColor: '#000',
    borderWidth: 5,
  },
  inputContainer: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginBottom: 15,
  },
  logoImage: {
    width: 100,
    height: 100,
  },
});
