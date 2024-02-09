import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native"
import { Feather, FontAwesome } from '@expo/vector-icons'
import Card from "./Card"
import { removeItem } from "../features/cartSlice"
import { useDispatch } from "react-redux"
import { shadowsBox } from "../global/colors";


const OrderItem = ({ order, setOrderId, setModalVisible, handleDeleteOrder }) => {

  const dispatch = useDispatch()

  const handleDeleteOrderPress = (orderId) => {
    handleDeleteOrder(orderId)
    dispatch(removeItem(orderId))
  }

    let date = new Date(order.createdAt).toLocaleString()



    return (
      <Card style={styles.cartItemContainer}>
        <View>
          <Text style={styles.createdAt}>Creada el {date}</Text>
          <Text style={styles.total}>Total: ${order.total}</Text>
        </View>
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => {
            setOrderId(order.orderId);
            setModalVisible(true);
          }}
        >
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteIcon} onPress={() => handleDeleteOrderPress(order.orderId)}>
            <FontAwesome style={styles.deleteOredr} name="trash-o" size={24} color="red" />
        </TouchableOpacity>
      </Card>
    );
}

export default OrderItem

const styles = StyleSheet.create ({
    cartItemContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        shadowColor: '#000000',
        ...shadowsBox,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    searchIcon: {
        marginLeft: 'auto',
        padding: 10
    },
    deleteOredr: {
      padding: 10
    },
    createdAt: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
    },
    total: {
        color: '#000'
    }, 
})