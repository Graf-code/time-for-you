import { StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import { useDispatch } from 'react-redux'
import { setProductIdSelected, setProductSelected } from '../features/shopSlices'


const ProductItem = ({product, navigation}) => {

  const dispatch = useDispatch()

  return (
      <TouchableOpacity onPress={()=> {
        // dispatch(setProductIdSelected(product.id))
        dispatch(setProductSelected(product.id))
        navigation.navigate("Detalle", product.id )}  
      }
        style={styles.containerProductItem}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Image 
          style={styles.ProductImage}
          resizeMode='cover'
          source={{uri: product.thumbnail }}
        />
      </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    containerProductItem:{
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 10,
      margin: 10,
      // backgroundColor: 'grey',
      borderWidth: 1,
      
    },
    productTitle:{
      textAlign: 'center',
      fontSize: 16,
      padding: 5,
    },
    ProductImage:{
      flex: 1,
      width: '100%',
      height: 200,
      alignItems: 'center'
    },

})