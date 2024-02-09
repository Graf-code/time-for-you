import { View, Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import { useSelector } from "react-redux";

const { width } = Dimensions.get('window');

const Carousel = () => {

    const images = useSelector(state => state.shopReducer.productSelected.images)
    console.log("Imagenes: ", images)

    return (
        <ScrollView>
        <Swiper style={styles.container} showsButtons={true}>
            {images.map(( images, index) => (
                <View key={index} style={styles.slide}>
                    <Image source={{ uri: images}} style={styles.images} />
                </View>
            ))}
        </Swiper>
        </ScrollView>
    )
}

export default Carousel

const styles = StyleSheet.create ({
    container: {
        height: 670,
        backgroundColor: "#000"
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    images: {
        width: width,
        height: 670, 
        resizeMode: "contain"   
    },
})