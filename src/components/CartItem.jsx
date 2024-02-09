import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors } from "../global/colors";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cartSlice";
import { shadowsBoxs } from "../global/colors";
import Card from "./Card";

const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(item.id))
  }

  return (
    <Card style={styles.cartItemConatiner}>
      <Image
        style={styles.imageCartItem}
        resizeMode='cover'
        source={{ uri: item.images[1] }}
      />
      <View >
        <Text style={styles.cartTitle}>{item.title}</Text>
        <Text style={styles.cartLightText}>${item.price} c/u</Text>
        <Text style={styles.cartTotalPrice}>
          Cantidad: {item.quantity}, Total: ${item.price*item.quantity}
        </Text>
      </View>
      <TouchableOpacity style={styles.trashCart} onPress={handleRemoveItem}>
        <Feather name="trash" size={24} color="black" />
        <Text style={styles.clearProductsTrash}>Borrar</Text>
      </TouchableOpacity>
    </Card>
  );
};

export default CartItem

const styles = StyleSheet.create({
  cartItemConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  cartItemConatiner: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    height: 'auto'
  },
  imageCartItem: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    ...shadowsBoxs
    
  },
  trashCart: {
    marginLeft: 'auto',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  cartTitle: {
    fontFamily: 'Roboto-Bold',
    textTransform: 'capitalize',
    fontSize: 18,
    padding: 5,
  },
  cartLightText: {
    fontFamily: 'Roboto-Bold',
    textTransform: 'capitalize',
    fontSize: 15,
    padding: 5,
    textAlign: 'center'
  },
  cartTotalPrice: {
    fontFamily: 'Roboto-Bold',
    textTransform: 'capitalize',
    fontSize: 16,
    color: colors.primary,
    padding: 5,
    textAlign: 'center'
  },
  clearProductsTrash: {
    color: '#000'
  }
});
