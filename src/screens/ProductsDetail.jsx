import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import products_data from "../data/products_data.json";
// import Header from '../components/Header'
import { colors } from "../global/colors";
import { useSelector, useDispatch } from 'react-redux'
import { setProductSelected } from "../features/shopSlices";
import Carousel from "../components/Carousel";
import { addItem } from "../features/cartSlice";

const ProductDetail = ({ route }) => {
  // const [productSelected, setProductSelected] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isPortrait, setIsPortrait] = useState(true);

  const { height, width } = useWindowDimensions();
  const productId  = route.params;

  const productSelected = useSelector(state=>state.shopReducer.productSelected)

  useEffect(() => {
    height < width ? setIsPortrait(false) : setIsPortrait(true)
  }, [height]);

  useEffect(() => {
    setIsLoading(false);
  }, [productId]);

  const dispatch = useDispatch()

  const onAddToCart = () => {
    dispatch(addItem({...productSelected, quantity: 1}))
  }

  return (
    <>
    {
      isLoading 
      ?
      <ActivityIndicator />
      :
      <>
       <ScrollView >
        <Carousel />
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{productSelected.title}</Text>
          <Text style={styles.description}>{productSelected.description}</Text>
          <Text style={styles.price}>{productSelected.price}</Text>
          <TouchableOpacity style={isPortrait ? styles.buyButton : styles.buyAlt} onPress={onAddToCart}>
            <Text style={styles.buyText}>Agregar al Carrito</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </>
    }
    </>
  )
}
export default ProductDetail;

const styles = StyleSheet.create({
  imageProduct: {
    minWidth: 200,
    width: "100%",
    height: 200,
  },
  imageProductLandscape: {
    width: "100%",
    height: 400,
    padding: 10,
    margin: 10,
  },
  detailContainer: {
    alignItems: "center",
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    padding: 10,
    },
  description: {
    fontFamily: 'Roboto-Thin',
    fontSize: 16,
    color: '#000',
    marginTop: 20,
    padding: 20,
    fontWeight: 'bold'
  },
  price: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    margin: 15,
  },
  buyButton: {
    marginTop: 10,
    width: "90%",
    padding: 10,
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 10,

  },
  buyText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  buyAlt: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  landScapeConatiner: {
    flexDirection: "row",
  },
});
