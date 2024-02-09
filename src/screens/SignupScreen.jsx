import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import CustomInput from '../components/CustomInput';
import { useSignUpMutation } from '../services/authServices';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';
import { signupSchema } from '../validation/signupSchema';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [triggerSignup, result] = useSignUpMutation();
    const dispatch = useDispatch();

    const onSubmit = async () => {
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");

        try {
            await signupSchema.validate({ email, password, confirmPassword }, { abortEarly: false });
            const signupResult = await triggerSignup({ email, password });

            if (signupResult.data) {
                dispatch(setUser(signupResult.data));
            }
        } catch (error) {
            if (error.inner) {
                error.inner.forEach(err => {
                    switch (err.path) {
                        case 'email':
                            setEmailError(err.message);
                            break;
                        case 'password':
                            setPasswordError(err.message);
                            break;
                        case 'confirmPassword':
                            setConfirmPasswordError(err.message);
                            break;
                        default:
                            break;
                    }
                });
            }
        }
    };


    useEffect(()=>{
        if(result.data) {
            dispatch(setUser(result.data))
        }
    }, [result]);


  return (
   <KeyboardAvoidingView style={styles.signupContainer} behavior='height'>
       <Image
        source={require("../../assets/img/logo-time-for-you.png")}
        style={styles.logoImage}
      />


        <CustomInput
            label="Email: "
            onChange={setEmail}
            error={emailError}
            placeholder="Ingrese su direccion de E-mail"
        />
        <CustomInput 
            label="Contraseña: "
            onChange={setPassword}
            isSecureEntry={true}
            error={passwordError}
            placeholder="Ingrese su contraseña"
        />
        <CustomInput
            label="Repetir Contraseña: "
            onChange={setConfirmPassword}
            isSecureEntry={true}
            error={confirmPasswordError}
            placeholder="Por favor, repita su contrseña"
        />
        <TouchableOpacity style={styles.btn} onPress={onSubmit}>
            <Text style={styles.btnText}>Registrarme</Text> 
        </TouchableOpacity>
        <View style={styles.altContainer}>
            <Text style={styles.subtitle}>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity style={styles.signInButton} onPress={() => { navigation.navigate("Login") }}>
                <Text style={styles.subtitleLink}>Ingresa</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
  )
}
export default SignupScreen
const styles = StyleSheet.create({
    signupContainer: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      gap: 10,
    },
    btn: {
      padding: 10,
      backgroundColor: '#000000',
      borderRadius: 8,
      margin: 5,
      width: '75%',
    },
    btnText: {
      color: '#fff',
      fontFamily: 'Roboto-Bold',
      fontSize: 18,
      textAlign: 'center',
    },
    altContainer: {
      flexDirection: 'column',
      gap: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      width: '75%',
    },
    signInButton: {
      width: '100%',
      backgroundColor: '#4CAF50',
      borderRadius: 10,
      padding: 5,
    },
    subtitle: {
      color: '#000',
      fontFamily: 'Roboto-Bold',
      fontSize: 18,
      marginBottom: 10,
    },
    subtitleLink: {
      fontFamily: 'Roboto-Bold',
      color: '#fff',
      fontSize: 18,
      textDecorationLine: 'underline',
      padding: 8,
      borderRadius: 10,
      textDecorationLine: 'none',
      textAlign: 'center',
    },
    logoImage: {
      width: 100,
      height: 100,
    },
  });
  