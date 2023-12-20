import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native"
import { Feather } from '@expo/vector-icons'
import Card from "./Card"


const OrderItem = ({ order, total }) => {
    return (
        <Card style={styles.cartItemContainer}>
            <View >
                <Text style={styles.createdAt}>
                    Creada el {new Date(order.createdAt).toLocaleString()}
                </Text>
                <Text style={StyleSheet.total}>Total: ${total}</Text>
            </View>
            <TouchableOpacity style={styles.searchIcon} onPress={null}>
                <Feather name="search" size={24} color="black" /> 
            </TouchableOpacity>
        </Card>
    )
}

export default OrderItem

const styles = StyleSheet.create ({
    cartItemContainer:{
        flexDirection: 'row',
        aligItems: 'center',
        padding: 20,
    },
    searchIcon: {
        marginLeft: 'auto',
    },
    createdAt: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
    },
    total: {
        color: '#000'
    }
})