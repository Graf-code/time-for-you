import { StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native'
import { useDispatch } from 'react-redux'
import { setProductIdSelected, setProductSelected } from '../features/shopSlices'
import { shadowsBox } from "../global/colors";


const ProductItem = ({product, navigation}) => {

  const dispatch = useDispatch()

  return (
    <View style={styles.containerProductItem}>
    <TouchableOpacity
      onPress={() => {
        // dispatch(setProductIdSelected(product.id))
        dispatch(setProductSelected(product.id));
        navigation.navigate("Detalle", product.id);
      }}
      style={styles.touchableContainer}
    >
      <Text style={styles.productTitle}>{product.title}</Text>
    </TouchableOpacity>
    <Image
      style={styles.ProductImage}
      resizeMode="contain"
      source={{ uri: product.thumbnail }}
    />
  </View>
  
  )
}

export default ProductItem

const styles = StyleSheet.create({
    containerProductItem:{
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 10,
      margin: 10,
      height: 700,
      backgroundColor: '#fff',
      shadowColor: '#000000',
      ...shadowsBox,
    },
    productTitle:{
      textAlign: 'center',
      fontSize: 18,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#404258',
      color: '#fff',
      margin: 10,
    },
    ProductImage:{
      flex: 1,
      width: 'auto',
      height: 200,
      alignItems: 'center',
    },
})
 