import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

    // const dispatch = useDispatch()

    useEffect(()=>{
        if(result.data) {
            dispatch(setUser(result.data))
        }
    }, [result.data]);


  return (
   <KeyboardAvoidingView style={styles.signupContainer} behavior='height'>


        <CustomInput
            label="Email: "
            onChange={setEmail}
            error={emailError}
        />
        <CustomInput 
            label="Contraseña: "
            onChange={setPassword}
            isSecureEntry={true}
            error={passwordError}
        />
        <CustomInput
            label="Repetir Contraseña: "
            onChange={setConfirmPassword}
            isSecureEntry={true}
            error={confirmPasswordError}
        />
        <TouchableOpacity style={styles.btn} onPress={onSubmit}>
            <Text style={styles.btnText}>Registrarme</Text> 
        </TouchableOpacity>
        <View style={styles.altContainer}>
            <Text style={styles.subtitle}>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                <Text style={styles.subtitleLink}>Ingresar</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
  )
}
export default SignupScreen
  const styles = StyleSheet.create({
      signupContainer: {
        backgroundColor: "#96EFFF",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 10,
    },
    btn: {
        padding: 10,
        backgroundColor: "#000",
        borderRadius: 8,
        margin: 5,
    },
    btnText: {
        color: "#fff",
        fontFamily: "Roboto-Thin",
    },
    altContainer: {
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    subtitle: {
        color: "#fff",
        fontFamily: "Roboto-Thin",
        fontSize: 12
    },
    subtitleLink: {
        fontFamily: "Roboto-Thin",
        color: "#fff",
        fontSize: 11,
        textDecorationLine: "underline"
    }

})

