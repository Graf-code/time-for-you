import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';
import { useState } from 'react';
import LogoutModal from './LogoutModal';

const Header = ({ title, showHomeButton, navigation }) => {
  const email = useSelector((state) => state.authReducer.user);
  const localId = useSelector((state) => state.authReducer.localId);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const confirmLogout = () => {
    dispatch(logout());
    setModalVisible(false);
  };

  const cancelLogout = () => {
    setModalVisible(false);
  };

  const handleLogoutPress = () => {
    if (email) {
      setModalVisible(true);
    } else {
      confirmLogout();
    }
  };

  const handleHomePress = () => {
    navigation.navigate("Categorias");
  };

  return (
    <View style={styles.headerContainer}>
      {showHomeButton && (
        <Pressable style={styles.icon} onPress={handleHomePress}>
          <AntDesign name="caretleft" size={30} color="#fff" />
        </Pressable>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      <Image
        source={require("../../assets/img/logo-time-for-you.png")}
        style={styles.logoImage}
      />
      {email && (
        <Pressable style={styles.icon} onPress={handleLogoutPress}>
          <AntDesign name="logout" size={20} color="white" />
        </Pressable>
      )}
      <LogoutModal
        visible={modalVisible}
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      />
    </View>
  );
};

export default Header;


const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 30,
  },
  headerTitle: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  logoImage: {
    height: 40,
    width: 40,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#fff',
  },
  centeredModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    margin: 10,
  },
  buttonNoClose: {
    margin: 10,
  },
  textStyle: {
    color: '#000',
    fontWeight: 'thin',
    textAlign: 'center',
    fontSize: 16
  },
  textStyleClose: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  }
});
