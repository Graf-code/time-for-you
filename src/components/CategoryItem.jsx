import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shopSlices";
import Card from "./Card";
import { shadowsBox } from "../global/colors";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Productos", { category });
        dispatch(setCategorySelected(category));
      }}
    >
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 16,
    shadowColor: '#ccc',
    ...shadowsBox,
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
  },
  text: {
    textTransform: 'capitalize',
    fontSize: 18,
    textAlign: 'center',
  },
});
