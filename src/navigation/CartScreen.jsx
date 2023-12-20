import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import cart_data from "../data/cart_data.json";
// import { colors } from "../global/colors";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const CartScreen = () => {
    const [total, setTotal] = useState();
    
    useEffect(() => {
      const totalCart = cart_data.reduce(
        (accumulator, currentItem) =>
          (accumulator += currentItem.price * currentItem.quantity),
        0
      );
      setTotal(totalCart);
    }, []);

  const renderCartItem = ({item}) => (
    <CartItem item={item} />
  );

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart_data}
        renderItem={renderCartItem}
        keyExtractor={item=>item.id}
      />
      <View style={styles.cartConfirm}>
            <Text style={styles.totalPrice}>Total: USD {total}</Text>
            <TouchableOpacity style={styles.confirmButton} onPress={null}>
                <Text style={styles.textConfirm}>Confirmar</Text>
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
    marginBottom: 82,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    backgroundColor: '#fff',
    padding: 5,
    margin: 2,
    borderRadius: 10,
    width: 'auto',
},
  totalPrice: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
  },
  confirmButton: {
    backgroundColor: "#65B741",
    padding: 7,
    borderRadius: 10,
  },
  textConfirm: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: "#000",
  },
});
