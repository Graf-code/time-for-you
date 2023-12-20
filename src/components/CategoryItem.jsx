import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Card from './Card'


const CategoryItem = ({ category, navigation }) => {
    const onPressCategory = () => {
        if (category) {

            navigation.navigate("Productos", { category: category });
        }
    }


  return (
    <TouchableOpacity onPress={onPressCategory}>
        <Card style={styles.cardContainer}>
            <Text style={styles.text}>{category}</Text>
        </Card>
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 16,
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 16,
        textAlign: 'center',
    }
})