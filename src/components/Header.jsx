import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../global/colors'

const Header = ({ title, showHomeButton, navigation }) => {
    const handleHomePress = () => {
      navigation.navigate('Categorias');
    };


  return (
    <View style={styles.headerContainer}>
      {showHomeButton && (
        <TouchableOpacity onPress={handleHomePress}>
          <AntDesign name="caretleft" size={30} color="#000" />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
   headerContainer: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,

   },
   headerTitle: {
    color: '#000',
    fontFamily: 'Roboto-Bold',
    marginLeft: 10,
    fontSize: 16
   }
})