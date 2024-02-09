import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopServices";

const CartScreen = () => {

    const cartItems = useSelector(state=>state.cartReducer.items)
    const total = useSelector(state=>state.cartReducer.total)
    const localId = useSelector(state=>state.authReducer.localId)
    const [triggerPost] = usePostOrderMutation()

    const confirmCart = () => {
      const createdAt = Date.now()
      triggerPost({total, cartItems, localId: localId, createdAt: createdAt, updatedAt: Date.now().toLocaleString(), orderId: Math.ceil(Math.random(1,10)*1000)})
    }

  const renderCartItem = ({ item }) => (
    <CartItem item={ item } />
  );


  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
      />
      <View style={styles.cartConfirm}>
            <Text style={styles.totalPrice}>Total: $ {total}</Text>
            <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
                <Text style={styles.textConfirm}>Confirmar turno</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};


export default CartScreen;

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
  },
  cartConfirm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
  confirmButton: {
    backgroundColor: '#A2FF86',
    padding: 8,
    borderRadius: 10,
  },
  textConfirm: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#000',
  },
});
