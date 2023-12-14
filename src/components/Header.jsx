import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../global/colors'

const Header = ({ title, returnHomeHandlerEvent, showHomeButton }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      {showHomeButton && (
        <TouchableOpacity onPress={returnHomeHandlerEvent}>
          <AntDesign name="home" size={30} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
   headerContainer: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,

   },
   headerTitle: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    marginLeft: 10,
    fontSize: 16
   }
})