import { StyleSheet, View } from 'react-native'
import { shadowsBox } from '../global/colors'

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
        ...shadowsBox,
    }
})