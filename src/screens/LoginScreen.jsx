import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomInput from '../components/CustomInput'
import { useLogInMutation } from '../services/authServices'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [triggerLogIn, result] = useLogInMutation()

    const onSubmit = () => {
        triggerLogIn ({email, password})
    }

    const dispatch = useDispatch()

    useEffect(()=>{
        if(result.data) {
            dispatch(setUser(result.data))
        }
    }, [result])

  return (
    <View style={styles.container}>
        <CustomInput
            label="Email: "
            onChange={setEmail}
            />
        <CustomInput 
            label="Contraseña: "
            onChange={setPassword}
            isSecureEntry={true}
            />
        <TouchableOpacity style={styles.btn} onPress={onSubmit}>
            <Text style={styles.btnText}>Ingresar</Text> 
        </TouchableOpacity>
        <View style={styles.altContainer}>
            <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
            <TouchableOpacity onPress={() => { navigation.navigate("Signup")}}>
                <Text style={styles.subtitleLink}>Crear una</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#A6FF96",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 10,
    },
    btn: {
        padding: 10,
        backgroundColor: "#000",
        // borderRadius: 5,
        margin: 5,
        width: '75%',
        alignItems: 'center',
        alignContent: 'center'
    },
    btnText: {
        color: "#fff",
        fontFamily: "Roboto-Bold",
    },
    altContainer: {
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    subtitle: {
        color: "#000",
        fontFamily: "Roboto-Bold",
    },
    subtitleLink: {
        fontFamily: "Roboto-Bold",
        color: "#0766AD",
        textDecorationLine: "underline"
    }
})