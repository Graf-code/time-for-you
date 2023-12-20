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

const ProductDetail = ({ route }) => {
  const [productSelected, setProductSelected] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isPortrait, setIsPortrait] = useState(true);

  const { height, width } = useWindowDimensions();
  const { productId } = route.params;

  useEffect(() => {
    setIsPortrait(height < width);
  }, [height, width]);

  useEffect(() => {
    const productNumber = parseInt(productId, 10);
    const productFound = products_data.find(
      (product) => product.id === productNumber
    );
    setProductSelected(productFound);
    setIsLoading(false);
  }, [productId]);

  useEffect(() => {
    console.log('Product Selected:', productSelected);
  }, [productSelected]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          {/* <Header title="Detalle del producto" /> */}
          <ScrollView>
            {/* <View>
                </View> */}
                <View style={styles.detailContainer}>
                  {productSelected ? (
                <>
                    <Text style={styles.title}>{productSelected.title}</Text>
                    { productSelected.images &&
                          productSelected.images[0] && (
                            <Image 
                              source={{ uri: productSelected.images[0] }}
                              resizeMode="contain"
                              style={
                                isPortrait
                                  ? styles.imageProduct
                                  : styles.imageProductLandscape
                              }
                            />
                          )}
                      <Text style={styles.description}>
                        {productSelected.description}
                      </Text>
                      <Text style={styles.price}>{"$" + productSelected.price}</Text>
                      <TouchableOpacity style={styles.buyButton}>
                        <Text style={styles.buyText}>Comprar</Text>
                      </TouchableOpacity>
                </>
              ) : (
                <Text>Error: Producto no encontrado</Text>
              )}
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

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
