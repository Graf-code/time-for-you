import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
import Header from "../components/Header";

// Aca se importan las vistas
import Categories from '../screens/Categories'
import ProductsByCategories from '../screens/ProductsByCategories'
import ProductDetail from '../screens/ProductsDetail'


const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return(
    
            <Stack.Navigator
                initialRouteName="categorias"
                screenOptions={({navigation, route}) => ({
                    Header: (props) => (
                        <Header 
                        {...props}
                        title={route.name} 
                        showHomeButton={route.name !== 'Categorias'} 
                        navigation={navigation} />
                 ),
                })}

                >
                <Stack.Screen 
                    name="Categorias"
                    component={Categories}
                    options={{ title: 'Categorias'}}
                />
                    <Stack.Screen 
                    name="Productos"
                    component={ProductsByCategories}
                    options={{ 
                        title: 'Mis productos'}}
                />
                    <Stack.Screen 
                    name="Detalle"
                    component={ProductDetail}
                    options={{ 
                        title: 'Detalle del producto'}}
               
                /> 
            </Stack.Navigator>
        
    )
}

export default ShopNavigator
