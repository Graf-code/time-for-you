import { ActivityIndicator } from "react-native";
import Categories from "./src/screens/Categories";
import { useFonts } from 'expo-font'
import ProductsByCategories from './src/screens/ProductsByCategories'
import { useState } from "react";

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')

  const oneReturnHome = () => {
    setCategorySelected("")
  }

  console.log("Categoria Seleccionada: ", categorySelected)

    const [fontLoaded] = useFonts ({
      'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
    })

    if(!fontLoaded) return <ActivityIndicator />

    const onSelectCategory= (category) => {
      setCategorySelected(category)
    }

  return (
    <>{
      categorySelected 
      ?
      <ProductsByCategories category={categorySelected} returnHomeHandlerEvent={oneReturnHome}/>
      :
      <Categories onSelectCategoryEvent={onSelectCategory} />
     }
    </>
  );
}
