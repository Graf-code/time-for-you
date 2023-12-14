import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import products_data from '../data/products_data.json'
import ProdcutItem from '../components/ProductItem'
import Header from '../components/Header'
import Search from '../components/Search'

const ProductsByCategories = ({ category, returnHomeHandlerEvent }) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [originalProductsByCategory, setOriginalProductsByCategory] = useState([]);
  const [search, setSearch] = useState('')


  useEffect(() =>{
    const productsFilteredByCategory = products_data.filter(product=>product.category===category);
    setOriginalProductsByCategory(productsFilteredByCategory);
    setProductsByCategory(productsFilteredByCategory);
  }, [category]);

  useEffect(() => {
    handleSearch();
  }, [search, originalProductsByCategory]);

  const onSearch = (search) => {
    setSearch(search); 
  }

  const handleSearch = () => {
    if (search === '') {
      setProductsByCategory(originalProductsByCategory);
    } else {
      const productsFiltered = originalProductsByCategory.filter(
        product => product.title.toLowerCase().includes(search.toLowerCase())
      );
      setProductsByCategory(productsFiltered);
    }
  };


  const renderProductItem = ({item}) => (
      <ProdcutItem product={item} />
  )


  return (
    <>
      <Header title="Productos" returnHomeHandlerEvent={returnHomeHandlerEvent} showHomeButton={true}/>
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