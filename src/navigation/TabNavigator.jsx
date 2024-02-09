
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text } from "react-native";
import { colors } from "../global/colors";
import { Entypo, AntDesign, Octicons, FontAwesome } from '@expo/vector-icons';
import ProfileNavigator from "./ProfileNavigator";
import BrandHistory from "../screens/BrandHistory";


import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from './OrdersNavigator'


const Tab = createBottomTabNavigator()


const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: style.tabBar,
      }}
    >

      <Tab.Screen
        name="BrandHistoryStack"
        component={BrandHistory}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              {/* Icono y texto para BrandHistory */}
              <Entypo
                name="home"
                size={24}
                color={focused ? "#3234a8" : "#ccc"}
              />
              <Text
                style={[
                  style.textBrandHistory,
                  { color: focused ? "#3234a8" : "#ccc" },
                ]}
              >
                Nosotros
              </Text>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="CartStack"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <AntDesign
                name="shoppingcart"
                size={24}
                color={focused ? "#3234a8" : "#ccc"}
              />
              <Text
                style={[
                  style.textCart,
                  { color: focused ? "#3234a8" : "#ccc" },
                ]}
              >
                Carrito
              </Text>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="OrderStack"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Octicons
                name="list-unordered"
                size={24}
                color={focused ? "#3234a8" : "#ccc"}
              />
              <Text
                style={[
                  style.textOrders,
                  { color: focused ? "#3234a8" : "#ccc" },
                ]}
              >
                Ordenes
              </Text>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <FontAwesome
                name="user-o"
                size={24}
                color={focused ? "#3234a8" : "#ccc"}
              />
              <Text
                style={[
                  style.textOrders,
                  { color: focused ? "#3234a8" : "#ccc" },
                ]}
              >
                Perfil
              </Text>
            </>
          ),
        }}
      />
      
      <Tab.Screen
        name="ShopStack"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Entypo
                name="shop"
                size={24}
                color={focused ? "#3234a8" : "#ccc"}
              />
              <Text
                style={[
                  style.textCategories,
                  { color: focused ? "#3234a8" : "#ccc" },
                ]}
              >
                Categorias
              </Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const style = StyleSheet.create ({
    tabBar: {
        backgroundColor: "#000",
        shadowColor: '#ccc',
        elevation: 1,
        height: 65,

    },
    textCategories: {
        fontSize: 12,
        color: "#fff"
    },
    textCart: {
        fontSize: 12,
        color: "#fff"
    },
    textOrders: {
        fontSize: 12,
        color: "#fff"
    }
})