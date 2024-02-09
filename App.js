import { ActivityIndicator } from "react-native";
import { useFonts } from 'expo-font'
import { Provider } from "react-redux";
import store from "./src/store/store";
import MainNavigator from "./src/navigation/MainNavigator";
import { init } from "./src/db";


export default function App() {

  init()
  .then(()=>console.log("Db inicializada correctamente"))
  .catch((error)=>console.log(error.message))

    const [fontLoaded] = useFonts ({
      'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
    })

    if(!fontLoaded) return <ActivityIndicator />


    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
      );
    }
    
    