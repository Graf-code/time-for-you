import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { shadowsBox } from "../global/colors";

const LogoutModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>¿Estás seguro de que deseas cerrar sesión?</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={onConfirm}
          >
            <Text style={styles.textStyle}>Cerrar Sesión</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonNoClose]}
            onPress={onCancel}
          >
            <Text style={styles.textStyleClose}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    ...shadowsBox,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 5,
    width: 150,
  },
  buttonClose: {
    backgroundColor: '#E0E0E0',
    width: 300
  },
  buttonNoClose: {
    backgroundColor: '#38E54D',
    width: 300,
  },
  textStyle: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',

  },
  textStyleClose: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LogoutModal;
