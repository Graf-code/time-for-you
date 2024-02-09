import { StyleSheet, Text, View, TextInput } from 'react-native'
import { useState } from 'react'

const CustomInput = ({ label, isSecureEntry = false, error ="", onChange, placeholder }) => {
    const [input, setInput] = useState()

    const onHandleChangeText = (text) => {
        setInput(text)
        onChange(text)
    }

  return (
    <View style={style.inputContainer}>
      <Text style={style.label}>{label}</Text>
      <TextInput
        style={style.input}
        onChangeText={onHandleChangeText}
        secureTextEntry={isSecureEntry}
        value={input}
        placeholder={placeholder}
        />
        {error && <Text style={style.error}>{error}</Text>}
    </View>
  )
}

export default CustomInput


const style = StyleSheet.create ({
    inputContainer: {
        justifyContent: 'center',
        width: '75%',
        alignItems: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderStyle: 'solid',
        width: '100%',
        padding: 8,
        fontSize: 17,
    },
    label: {
        fontFamily: 'Roboto-Bold',
        color: '#000',
        paddingLeft: 5,
        marginBottom: 4,
    },
    error: {
        padding: 10,
        color: '#fff'
    },
})
