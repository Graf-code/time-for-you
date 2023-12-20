import { StyleSheet, Text, TouchableOpacity, Image} from 'react-native'


const ProductItem = ({product, navigation}) => {
  return (
      <TouchableOpacity onPress={()=>navigation.navigate("Detalle", { productId: product.id })} style={styles.containerProductItem}>
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