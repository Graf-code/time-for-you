import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { useState, useEffect } from "react";
import { Animated } from "react-native";
import Header from "../components/Header";


const BrandHistory = ({ navigation, handleHomePress }) => {
  const navigateToCategories = () => {
    navigation.navigate("Categories");
  };
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000, // Ajusta la duración según tu preferencia
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView style={styles.scrollText}>
    <View style={styles.containerBrand}>
    <Header title="Nosotros" showHomeButton={false} navigation={navigation} position="sticky" />
     <Text style={styles.brandHistoryWelcome}>
        Bienvenida a TIME FOR YOU
    </Text>
  <Animated.Image source={require('../../assets/img/tfy1.jpg')} style={[styles.imageInText, { opacity: fadeAnim }]} />
    <Text style={styles.brandHistoryText}>
      Tu oasis de belleza y bienestar. En nuestro espacio dedicado exclusivamente a la salud y la belleza femenina, nos enorgullece ofrecerte una experiencia única y personalizada.
    </Text>
    <Animated.Image source={require('../../assets/img/tfy2.jpg')} style={[styles.imageInText, { opacity: fadeAnim }]} />

<Text style={styles.brandHistoryText}>
  En TIME FOR YOU, nos especializamos en una variedad de servicios diseñados para realzar tu belleza natural y brindarte momentos de relajación inolvidables. Nuestro equipo de profesionales altamente capacitados está comprometido en proporcionarte un trato excepcional, donde cada visita se convierte en un capítulo de tu propia historia de bienestar.
</Text>
<Animated.Image source={require('../../assets/img/tfy3.jpg')} style={[styles.imageInText, { opacity: fadeAnim }]} />


<Text style={styles.brandServices}>
  Nuestros servicios exclusivos incluyen:
</Text>

<Text style={styles.brandHistoryText}>
  - Depilación Definitiva Láser (Soprano): Olvídate de la incomodidad de la depilación convencional y descubre la suavidad duradera con nuestro avanzado tratamiento láser.
</Text>
<Animated.Image source={require('../../assets/img/tfy4.jpg')} style={[styles.imageInText, { opacity: fadeAnim }]} />

<Text style={styles.brandHistoryText}>
  - Dermaplaning: Experimenta la magia de una piel suave y radiante con nuestra técnica de dermaplaning, diseñada para revelar tu belleza natural.
</Text>
<Animated.Image source={require('../../assets/img/tfy8.jpg')} style={[styles.imageInText, { opacity: fadeAnim }]} />

<Text style={styles.brandHistoryText}>
  - Aparatología: Descubre la última tecnología en tratamientos de belleza que revitalizan y rejuvenecen tu piel.
</Text>
<Animated.Image source={require('../../assets/img/tfy5.jpg')} style={[styles.imageInText, { opacity: fadeAnim }]} />


<Text style={styles.brandHistoryText}>
  - Servicios de Pestañas y Cejas: Resalta tu mirada con nuestros servicios expertos de pestañas y cejas, personalizados para realzar tu belleza única.
</Text>
<Animated.Image source={require('../../assets/img/tfy6.jpg')} style={[styles.imageInText, { opacity: fadeAnim }]} />
<Animated.Image source={require('../../assets/img/tfy7.jpg')} style={[styles.imageInText, { opacity: fadeAnim }]} />

<Text style={styles.brandHistoryText}>
  - Cursos: En TIME FOR YOU, no solo ofrecemos servicios, sino también la oportunidad de aprender y crecer. Explora nuestros cursos diseñados para compartir los secretos de la belleza y el cuidado personal.
</Text>
<Animated.Image source={require('../../assets/img/tfy9.jpg')} style={[styles.imageInText, { opacity: fadeAnim }]} />

<Text style={styles.brandHistoryText}>
  Nos esforzamos por crear un ambiente acogedor y cálido donde cada mujer se sienta como en casa. En TIME FOR YOU, entendemos que tu tiempo es valioso, y nos comprometemos a ofrecerte servicios de alta calidad que se ajusten a tus necesidades y superen tus expectativas.
</Text>

<Text style={styles.brandHistoryText}>
  Ven y déjanos consentirte. En TIME FOR YOU, no solo te ofrecemos servicios de belleza, sino una experiencia que te hará sentirte especial en cada visita. ¡Te esperamos para que descubras la verdadera belleza en el corazón de nuestro centro de estética!
</Text>

<Text style={styles.brandHistoryText}>
  ¡Gracias por elegirnos en tu viaje hacia la belleza y el bienestar!
</Text>
<Text style={styles.textPolitics}>
  Leer Atentamente por favor.
</Text>
<Animated.Image source={require('../../assets/img/pdc1.jpg')} style={[styles.imageInText, { opacity: fadeAnim }]} />
<Animated.Image source={require('../../assets/img/pdc2.jpg')} style={[styles.imageInText, { opacity: fadeAnim }]} />
<Animated.Image source={require('../../assets/img/pdc3.jpg')} style={[styles.imageInText, { opacity: fadeAnim }]} />
    </View>
    </ScrollView>
  );
};

export default BrandHistory

const styles = StyleSheet.create({
  containerBrand: {
    backgroundColor: '#000',
  },
  brandHistoryWelcome: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
  },
  brandHistoryText: {
      fontFamily: 'Roboto-Thin',
      fontSize: 18,
      marginBottom: 20,
      color: '#fff',
      padding: 5,
      textAlign: 'center',
      margin: 45,
  },
  brandServices: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
    padding: 10,
    width: '75%',
    alignSelf: 'center'
  },
  navigateToCategoriesButton: {
      backgroundColor: '#000',
      padding: 10,
      borderRadius: 10,
  },
  buttonText: {
      color: '#fff',
      fontFamily: 'Roboto-Bold',
  },
  imageInText: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 10,
  },
  textPolitics: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 15,
  }
})