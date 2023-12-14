import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'


const ProdcutItem = ({product}) => {
  return (
    <View>
      <TouchableOpacity style={styles.containerProductItem}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Image 
          style={styles.ProductImage}
          resizeMode='cover'
          source={{uri: product.thumbnail }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ProdcutItem

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