import { FlatList, StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import CategoryItem from '../components/CategoryItem'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../services/shopServices'

const Categories = ({ navigation }) => {
  const { data, isLoading, error } = useGetCategoriesQuery();

  if (isLoading) {
      return <ActivityIndicator />;
  }

  if (error) {
    console.error("Error cargando categorías:", error);
    return <Text>Error cargando categorías</Text>;
  }

  console.log("Data:", data);

  const renderCategoryItem = ({ item }) => (
      <CategoryItem category={item} navigation={navigation} />
  );

  return (
      <>
          <View style={styles.categories}>
              <FlatList
                  style={styles.categories}
                  data={data}
                  renderItem={renderCategoryItem}
                  keyExtractor={(item, index) => index.toString()}
              />
          </View>
      </>
  );
};

export default Categories

const styles = StyleSheet.create({
   categories: {
    backgroundColor: "#000",
  }
})