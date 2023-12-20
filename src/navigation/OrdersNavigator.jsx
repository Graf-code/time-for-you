import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import OrdersScreen from "../screens/OrdersScreen";


const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRoutname="Ordenes"
            screenOptions={
                ({ navigation, route }) => ({
                    header: () => <Header title={route.name} navigation={navigation} />
                })
            }
            >
                <Stack.Screen
                    name="Ordenes"
                    component={OrdersScreen}
                    />
            </Stack.Navigator>
    )
}

export default OrdersNavigator