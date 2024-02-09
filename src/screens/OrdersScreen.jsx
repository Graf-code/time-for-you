import { FlatList, Pressable, StyleSheet, View, Text, Modal, Image } from "react-native" 
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from "../services/shopServices"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { shadowsBox } from "../global/colors";
import { removeItem } from "../features/cartSlice"


const OrdersScreen = () => {

    const localId = useSelector(state=>state.authReducer.localId)
    const {data, isLoading, error } = useGetOrdersQuery(localId)
    const [orderData, setOrderData] = useState([])
    const [orderIdSelected, setOrderIdSelected] = useState("")
    const [orderSelected, setOrderSelected] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const dispatch = useDispatch()

    const handleDeleteOrder = (orderId) => {
      const updatedOrderData = orderData.filter(order => order.orderId !== orderId)
      setOrderData(updatedOrderData) 
      dispatch(removeItem(orderId))
    }

    useEffect(()=>{
        if(data){
            const orderData = Object.values(data)
            setOrderData(orderData)
            console.log("Datos de data: ", data)
        }
    },[data, isLoading, error])

    useEffect(()=>{
        console.log(orderIdSelected)
        const orderSelected = orderData.find(order=>order.orderId===orderIdSelected)
        setOrderSelected(orderSelected)
    },[orderIdSelected])


    const renderOrderItem = ({ item }) => {
        return(
            <OrderItem order={item} 
            setOrderId={setOrderIdSelected} 
            setModalVisible={setModalVisible} 
            handleDeleteOrder={handleDeleteOrder}
            />
        )
    }

    return (
      <>
        <FlatList data={orderData} renderItem={renderOrderItem} keyExtractor={item => item.id} />
        <Modal visible={modalVisible}>
          <View style={styles.centeredView}>  
          <Image
        source={require('../../assets/img/logo-time-for-you.png')}  
      />
      <Text style={styles.textPresentationModal}>Al presentar este número de orden, podremos atender su solicitud. ¡Gracias por confiar en nosotros!</Text>
            <View style={styles.modalView}>
            <Text style={styles.textOrder}>Su numero de orden es:</Text>
              <Text style={styles.modalText}>{orderSelected?.orderId}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cerrar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </>
    );
}

export default OrdersScreen

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000000',
    ...shadowsBox,
    height: 400,
    width: 300,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    width: '80%',
    position: 'absolute',
    bottom: 20,
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    marginTop: '50%',
    fontSize: 24,
  },
  textOrder: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
  },
  textPresentationModal: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    color: '#000000',
  },
  logo: {
    width: 100,
    height: 100,
  },
});
