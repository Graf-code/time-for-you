import { StyleSheet, View } from 'react-native'


const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        elevation: 2,
        shadowOpacity: 5,
        shadowRadius: 0,
    }
})