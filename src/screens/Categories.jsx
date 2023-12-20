import { FlatList, StyleSheet, View } from 'react-native'
// import Header from '../components/Header'
import categories_data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'

const Categories = ({navigation}) => {
  
    const renderCategoryItem = ({item}) =>(
       <CategoryItem  category={item} navigation={navigation}/>
    )

  return (
    <>
      {/* <Header title="Categorias" showHomeButton={false} /> */}
      <View style={styles.categories}>
          <FlatList style={styles.categories}
              data={categories_data}
              renderItem={renderCategoryItem}
              keyExtarctor={item=>item}
          />
      </View>    
    </>
  )
}

export default Categories

const styles = StyleSheet.create({
  categories: {
    marginBottom: 60,
  }
})