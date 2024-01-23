import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors } from "../global/colors";
import { Feather } from "@expo/vector-icons";
import Card from "./Card";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cartSlice";

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
        <Text style={styles.cartLightText}>{item.brand}</Text>
        <Text style={styles.cartLightText}>${item.price} c/u</Text>
        <Text style={styles.cartTotalPrice}>
          Cantidad: {item.quantity}, Total: ${item.price*item.quantity}
        </Text>
      </View>
      <TouchableOpacity style={styles.trashCart} onPress={handleRemoveItem}>
        <Feather name="trash" size={24} colors="black" />
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
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 7,
  },
  imageCartItem: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  trashCart: {
    marginLeft: "auto",
    padding: 20
  },
  cartTitle: {
    fontFamily: "Roboto-Bold",
    textTransform: "capitalize",
    fontSize: 20,
  },
  cartLightText: {
    fontFamily: "Roboto-Bold",
    textTransform: "capitalize",
    fontSize: 15,
  },
  cartTotalPrice: {
    fontFamily: "Roboto-Bold",
    textTransform: "capitalize",
    fontSize: 16,
    color: colors.primary,
  },
});
