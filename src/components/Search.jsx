import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { Ionicons, Entypo } from '@expo/vector-icons'; 

const Search = ({ onSearchHandlerEvent }) => {
    const [searchInput, setSearchInput] = useState('');
    const [error, setError] = useState('');

    const onSearchHandler = () => {
        const regEx = /^[a-zA-Z0-9\s]+$/; //Expresion regular para evaluar que no se escriban caracteres especiales 
        if (!regEx.test(searchInput)) {
            setError("Solo se admiten letras y numeros");
            setSearchInput('');
        } else {
            setError('');
            onSearchHandlerEvent(searchInput);
        }
    };

    const clearSearchInput = () => {
        setSearchInput('');
        onSearchHandlerEvent(searchInput);
    };

  return (
    <>
        <View style={styles.searchContainer}>
            <TouchableOpacity onPress={()=>onSearchHandler(searchInput)}>
                <Ionicons name="search-outline" size={24} color="black" />
            </TouchableOpacity>
        <TextInput 
                style={styles.textInput}
                onChangeText={setSearchInput}
                placeholder='Buscar Producto'
                value={searchInput}
            />
            <TouchableOpacity onPress={clearSearchInput}>
                <Entypo name="circle-with-cross" size={24} color="black" />
            </TouchableOpacity>
        </View>
        {error
            ?
            <View style={styles.errorMessageContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
            :
            null
        }
    </>
  )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borberBottomColor: '#000',
        borderRadius: 10,
        // backgroundColor: 'grey',
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
    },
    textInput: {
        width: '80%',
        fontFamily: 'Roboto-Thin',
        fontSize: 16,
    },
    errorMessageContainer:{
        padding: 10,
        backgroundColor: '#EEE7DA',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
    },
    errorText: {
        color: 'red',
        textAlign: 'center'
    }

})