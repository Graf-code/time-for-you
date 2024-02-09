import { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopServices";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";

const ProductsByCategories = ({ navigation, route }) => {
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [search, setSearch] = useState("");

  const category = useSelector((state) => state.shopReducer.categorySelected);

  const { data, isLoading, error } = useGetProductsByCategoryQuery(category);

  useEffect(() => {
    if (!isLoading) {
      const productsValues = Object.values(data);
      const productsFiltered = productsValues.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setProductsByCategory(productsFiltered);
    }
  }, [isLoading, category, search, data]);

  const renderProductItem = ({ item }) => (
    <ProductItem product={item} navigation={navigation} />
  );

  const onSearch = (search) => {
    setSearch(search);
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator style={styles.activityCharge} />
      ) : error ? (
        <Text>Error al cargar el producto</Text>
      ) : productsByCategory.length === 0 ? (
        <Text>Producto no encontrado</Text>
      ) : (
        <>
          <Search onSearchHandlerEvent={onSearch} />
          <FlatList
            data={productsByCategory}
            renderItem={renderProductItem}
            keyExtractor={item => item.id.toString()}
          />
        </>
      )}
    </>
  );
};

export default ProductsByCategories;

const styles = StyleSheet.create({
  activityCharge: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    size:"large",
    padding: 20,
  }
});

