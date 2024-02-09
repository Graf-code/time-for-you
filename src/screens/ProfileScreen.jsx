import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import user_data from "../data/user_data.json" 
import { useSelector } from 'react-redux'
import LocationSelector from '../components/LocationSelector'
import { shadowsBox } from '../global/colors'


const ProfileScreen = ({ navigation }) => {


  const image = useSelector(state=>state.authReducer.profilePicture)

  const location = useSelector(state=>state.authReducer.location)

  return (
    <>
      <View style={styles.container}>
        <View>
          <Pressable
            onPress={() => navigation.navigate("Seleccionar Imagen")}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#DCDCDC" : "#E8E8E8",
              },
              styles.imageContainer,
            ]}
          >
            {Image 
              ? 
              <Image
                source={require('../../assets/img/user.png')}
                style={styles.profilePicture}
                resizeMode="contain"
              />
              : 
              <Image
                source={{ uri: image }}
                style={styles.profilePicture}
                resizeMode="contain"
              />
            }
          </Pressable>
        </View>
        <View style={styles.userDataContainer}>
          <Text style={styles.userData}>{user_data.name}</Text>
          <Text style={styles.userData}>{user_data.role}</Text>
          <Text style={styles.userData}>Nivle: {user_data.level}</Text>
          <Text style={styles.userData}>Duracion: {user_data.address}</Text>
          <Text style={styles.userData}>{user_data.city}</Text>
        </View>
      </View>
      {
        location
        && (
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Ultima Ubicacion Guardada</Text>
          <Text style={styles.addressDescription}>{location.address}</Text>
        </View>
      )}
      <LocationSelector />
    </>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    gap: 20,
    alignItems: 'flex-start',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 150,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 100,
    margin: 10,
    borderWidth: 2,
    borderColor: '#000',
  },
  userDataContainer: {
    marginTop: 10,
  },
  imageContainer: {
    borderRadius: 100,
    backgroundColor: '#fff',
    padding: 10,
  },
  userData: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  addressContainer: {
    alignItems: 'center',
    gap: 5,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    backgroundColor: '#98FB98',
  },
  addressTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#000',
  },
  addressDescription: {
    fontFamily: 'Roboto-Bold',
    color: '#000',
  },
});
