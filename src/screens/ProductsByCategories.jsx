import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import products_data from '../data/products_data.json'
import ProductItem from '../components/ProductItem'
// import Header from '../components/Header'
import Search from '../components/Search'

const ProductsByCategories = ({ navigation, route }) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [originalProductsByCategory, setOriginalProductsByCategory] = useState([]);
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const { category } = route.params


  useEffect(() =>{
    const productsFilteredByCategory = products_data.filter(product=>product.category===category);
    setOriginalProductsByCategory(productsFilteredByCategory);
    setProductsByCategory(productsFilteredByCategory);
    setSelectedCategory(category)
  }, [category]);

  useEffect(() => {
    handleSearch();
  }, [search, originalProductsByCategory]);

  useEffect(() => {
    if (selectedCategory !== null) {
    }
  }, [selectedCategory]);


  const onSearch = (search) => {
    setSearch(search); 
  }

  const handleSearch = () => {
    if (search === '') {
      setProductsByCategory(originalProductsByCategory);
    } else {
      const productsFiltered = originalProductsByCategory.filter(
        (product) => product.title.toLowerCase().includes(search.toLowerCase())
      );
      setProductsByCategory(productsFiltered);
    }
  };



  const renderProductItem = ({item}) => (
      <ProductItem product={item} navigation={navigation} />
  )


  return (
    <>
      {/* <Header title="Productos" HomeButton={true} navigation={navigation}/> */}
      <Search onSearchHandlerEvent={onSearch} setProductsByCategory={setProductsByCategory} originalPorductList={originalProductsByCategory} />
      <FlatList 
      data={productsByCategory}
      renderItem={renderProductItem}
      keyExtractor={item=>item.id}
      />
    </>
    )
}

export default ProductsByCategories

const styles = StyleSheet.create({

})