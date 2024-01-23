import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState, useEffect } from "react";
// import products_data from '../data/products_data.json'
import ProductItem from "../components/ProductItem";
// import Header from '../components/Header'
import Search from "../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopServices";

const ProductsByCategories = ({ navigation, route }) => {
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [search, setSearch] = useState("");

  const category = useSelector((state) => state.shopReducer.categorySelected);

  const {
    data: productsFilteredByCategory,
    isLoading,
    error,
  } = useGetProductsByCategoryQuery(category);

  useEffect(()=>{
    if (!isLoading) {
      const productsValues = Object.values(productsFilteredByCategory);
      const productsFiltered = productsValues.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()))
        setProductsByCategory(productsFiltered);
    }
  }, [isLoading, category, search]);

  const renderProductItem = ({ item }) => (
    <ProductItem product={item} navigation={navigation} />
  );

  const onSearch = (search) => {
    setSearch(search);
  };

  return (
    <>
      {isLoading ? 
        <ActivityIndicator />
        : 
        <>
          <Search onSearchHandlerEvent={onSearch} />
          <FlatList
            data={productsByCategory}
            renderItem={renderProductItem}
            keyExtractor={item=>item.id}
          />
        </>
      }
    </>
  );
};

export default ProductsByCategories;

const styles = StyleSheet.create({});

// const productsFilteredByCategory = products_data.filter(product=>product.category===category);
// const { category } = route.params
// const [originalProductsByCategory, setOriginalProductsByCategory] = useState([]);

// useEffect(() => {
//   if (selectedCategory !== null) {
//   }
// }, [selectedCategory]);
// console.log("Route params: " ,route.params)
// const [selectedCategory, setSelectedCategory] = useState(null)
// const productsFilteredByCategory = useSelector(state=>state.shopReducer.productsFilteredByCategory)
