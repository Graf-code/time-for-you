import { FlatList, StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import categories_data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'

const Categories = ({onSelectCategoryEvent, returnHomeHandlerEvent}) => {
    const renderCategoryItem = ({item}) =>(
       <CategoryItem  category={item} onSelectCategoryEvent={onSelectCategoryEvent}/>
    )

  return (
    <>
      <Header title="Categorias" returnHomeHandlerEvent={returnHomeHandlerEvent} showHomeButton={false} />
      <View style={styles.categories}>
      <FlatList 
          data={categories_data}
          renderItem={renderCategoryItem}
          keyExtarctor={item=>item}
    />
    </View>    
    </>
  )
}

export default Categories

const styles = StyleSheet.create({})