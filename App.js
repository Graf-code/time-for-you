import { ActivityIndicator } from "react-native";
import { useFonts } from 'expo-font'

import TabNavigator from "./src/navigation/TabNavigator";


export default function App() {

    const [fontLoaded] = useFonts ({
      'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
    })

    if(!fontLoaded) return <ActivityIndicator />


    return (
      
      <TabNavigator />
      );
    }
    
    