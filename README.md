# Proyecto: Time for you

Autor: Federico Ezequiel Fernandez

### Descripción del Proyecto: Time for you

**Propósito y Objetivo:**
El proyecto "Time for you" tiene como propósito principal mejorar la gestión y visibilidad del centro de estética femenina del mismo nombre. El objetivo es proporcionar a la propietaria del centro una plataforma más eficiente y efectiva para interactuar con los clientes, organizar los registros, exhibir sus productos y mostrar los servicios que ofrece. En esencia, busca modernizar y optimizar la forma en que el centro de estética se comunica y presenta su oferta al público.

**Problema a Resolver:**
El principal problema que se intenta resolver es la dependencia exclusiva de WhatsApp como canal de comunicación. Si bien WhatsApp es una herramienta útil, puede volverse limitada en términos de organización y visibilidad de la oferta del centro. "Time for you" busca solucionar este problema ofreciendo una plataforma más completa y organizada que permita a la propietaria gestionar de manera eficiente sus servicios, productos y comunicaciones con los clientes.

### Descripción del Centro de Estética Time for you

**Descripción General:**
Time for you es un centro de estética femenina dedicado a brindar una experiencia de cuidado personalizada y de alta calidad a sus clientes. Con un enfoque en la belleza y el bienestar, el centro ofrece una amplia gama de servicios que van desde tratamientos faciales y corporales hasta servicios de manicura y pedicura. Cada tratamiento está diseñado para satisfacer las necesidades individuales de los clientes, utilizando productos de calidad y técnicas avanzadas.


**Productos y Servicios:**
Nuestro centro de estética ofrece una amplia variedad de servicios, que incluyen:
* Depilación Definitiva (Soprano)
* Dermaplaning
* Aparatología
* Servicios de Cejas
* Servicios de Pestañas
* Cursos

**ALCANCE DEL PROYECTO**
El alcance del proyecto establece los límites y las funcionalidades que se incluyen en la aplicación. A continuación, se detallan las principales características y funcionalidades que se han implementado:

1. **Autenticación de Usuarios:**
   - Los usuarios pueden registrarse e iniciar sesión en la aplicación utilizando un correo electrónico y una contraseña.

2. **Gestión de Turnos:**
   - Los usuarios pueden solicitar citas para los diferentes servicios ofrecidos por el centro de estética.
   - El sistema de gestión de turnos permite a los usuarios programar citas en base al tratamiento que hayan adquirido.

3. **Catálogo de Productos y Servicios:**
   - Los usuarios pueden explorar el catálogo de servicios ofrecidos por el centro de estética.
   - Cada servicio se presenta con una descripción detallada, imágenes y precios correspondientes.

4. **Carrito de Compras:**
   - Los usuarios pueden agregar servicios al carrito de compras. Tambien pueden eliminar el producto si asi lo desean.

5. **Ubicación del Lugar:**
   - El usuario cuenta con un apartado donde puede ver la ubicación del centor de estetica.

6. **Órdenes:**
   - En el apartado de órdenes, los usuarios pueden ver la fecha, la hora y el valor del servicio. Si presionan sobre un icono de una lupa, podrán ver el número de la orden del servicio adquirido.

7. **Perfil de Usuario:**
   - El usuario cuenta con un apartado donde puede tener su foto de perfil y sus datos, los cuales son almacenados en una base de datos real (Firebase).

**Expectativas No Cumplidas:**
- **Gestión de Inventarios:** Por el momento, no se ha implementado una funcionalidad completa de gestión de inventarios para controlar el stock de productos.
- **Sistema de Puntuación y Reseñas:** Aunque es una característica deseable, la capacidad de dejar reseñas y puntuaciones para productos y servicios no se ha incluido en esta versión inicial del proyecto.
- **Integración con Pasarelas de Pago Específicas:** La integración con pasarelas de pago específicas (por ejemplo, Mercado Pago) no se ha realizado en esta etapa.


## Librerías Utilizadas

- **@expo/webpack-config**

  - **Motivo de Utilización:** Esta librería proporciona configuraciones predeterminadas para webpack en proyectos Expo.
  - **Instalación:** Se instala automáticamente al utilizar Expo.

- **@react-navigation/bottom-tabs**

  - **Motivo de Utilización:** Utilizada para la navegación mediante pestañas en la parte inferior de la aplicación.
  - **Instalación:** Se instala utilizando npm o yarn: `npm install @react-navigation/bottom-tabs` o `yarn add @react-navigation/bottom-tabs`.

- **@react-navigation/native**

  - **Motivo de Utilización:** Librería principal para la navegación en aplicaciones React Native.
  - **Instalación:** Se instala utilizando npm o yarn: `npm install @react-navigation/native` o `yarn add @react-navigation/native`.

- **@react-navigation/native-stack**

  - **Motivo de Utilización:** Utilizada para la navegación mediante stack en la aplicación.
  - **Instalación:** Se instala utilizando npm o yarn: `npm install @react-navigation/native-stack` o `yarn add @react-navigation/native-stack`.

- **@reduxjs/toolkit**

  - **Motivo de Utilización:** Proporciona herramientas para gestionar el estado de la aplicación de manera eficiente, incluyendo la creación de store, reducers y actions.
  - **Instalación:** Se instala utilizando npm o yarn: `npm install @reduxjs/toolkit` o `yarn add @reduxjs/toolkit`.

- **expo**

  - **Motivo de Utilización:** Plataforma que facilita el desarrollo de aplicaciones móviles con React Native.
  - **Instalación:** Se instala automáticamente al crear un proyecto Expo.

- **expo-file-system**

  - **Motivo de Utilización:** Proporciona acceso al sistema de archivos del dispositivo.
  - **Instalación:** Se instala automáticamente al utilizar Expo.

- **expo-font**

  - **Motivo de Utilización:** Utilizada para cargar fuentes personalizadas en la aplicación.
  - **Instalación:** Se instala automáticamente al utilizar Expo.

- **expo-image-picker**

  - **Motivo de Utilización:** Permite a los usuarios seleccionar imágenes de la galería o capturar nuevas imágenes con la cámara del dispositivo.
  - **Instalación:** Se instala automáticamente al utilizar Expo.

- **expo-location**

  - **Motivo de Utilización:** Proporciona acceso a la ubicación del dispositivo.
  - **Instalación:** Se instala automáticamente al utilizar Expo.

- **expo-sqlite**

  - **Motivo de Utilización:** Utilizada para interactuar con bases de datos SQLite en aplicaciones Expo.
  - **Instalación:** Se instala automáticamente al utilizar Expo.

- **expo-status-bar**

  - **Motivo de Utilización:** Proporciona una barra de estado personalizable para aplicaciones Expo.
  - **Instalación:** Se instala automáticamente al utilizar Expo.

- **geolib**

  - **Motivo de Utilización:** Proporciona funciones para cálculos geoespaciales, como distancia entre coordenadas.
  - **Instalación:** Se instala utilizando npm o yarn: `npm install geolib` o `yarn add geolib`.

- **react**

  - **Motivo de Utilización:** Biblioteca principal de React para la construcción de interfaces de usuario.
  - **Instalación:** Se instala automáticamente al crear un proyecto React.

- **react-native**

  - **Motivo de Utilización:** Framework para el desarrollo de aplicaciones móviles con JavaScript y React.
  - **Instalación:** Se instala automáticamente al crear un proyecto React Native.

- **react-native-maps**

  - **Motivo de Utilización:** Utilizada para integrar mapas en la aplicación.
  - **Instalación:** Se instala utilizando npm o yarn: `npm install react-native-maps` o `yarn add react-native-maps`.

- **react-native-markdown-display**

  - **Motivo de Utilización:** Utilizada para renderizar texto en formato Markdown en la aplicación.
  - **Instalación:** Se instala utilizando npm o yarn: `npm install react-native-markdown-display` o `yarn add react-native-markdown-display`.

- **react-native-safe-area-context**

  - **Motivo de Utilización:** Proporciona información sobre las áreas seguras en dispositivos móviles para evitar problemas de diseño.
  - **Instalación:** Se instala utilizando npm o yarn: `npm install react-native-safe-area-context` o `yarn add react-native-safe-area-context`.

- **react-native-screens**

  - **Motivo de Utilización:** Utilizada para mejorar el rendimiento de la navegación en aplicaciones React Native.
  - **Instalación:** Se instala utilizando npm o yarn: `npm install react-native-screens` o `yarn add react-native-screens`.

- **react-native-swiper**

  - **Motivo de Utilización:** Componente utilizado para implementar deslizadores en la interfaz de usuario.
  - **Instalación:** Se instala utilizando npm o yarn: `npm install react-native-swiper` o `yarn add react-native-swiper`.

- **react-redux**

  - **Motivo de Utilización:** Utilizada para integrar Redux con aplicaciones React Native.
  - **Instalación:** Se instala utilizando npm o yarn: `npm install react-redux` o `yarn add react-redux`.

- **yup**

  - **Motivo de Utilización:** Librería de validación de esquemas para JavaScript.
  - **Instalación:** Se instala utilizando npm o yarn: `npm install yup` o `yarn add yup`.

| Librería                               | Versión    |
|----------------------------------------|------------|
| @expo/webpack-config                   | ^19.0.1    |
| @react-navigation/bottom-tabs          | ^6.5.11    |
| @react-navigation/native                | ^6.1.9     |
| @react-navigation/native-stack         | ^6.9.17    |
| @reduxjs/toolkit                       | ^2.0.1     |
| expo                                   | ~49.0.15   |
| expo-file-system                       | ~15.4.5    |
| expo-font                              | ~11.4.0    |
| expo-image-picker                      | ~14.3.2    |
| expo-location                          | ~16.1.0    |
| expo-sqlite                            | ~11.3.3    |
| expo-status-bar                        | ~1.6.0     |
| geolib                                 | ^3.3.4     |
| react                                  | 18.2.0     |
| react-native                           | 0.72.6     |
| react-native-maps                      | ^1.10.0    |
| react-native-markdown-display          | ^7.0.2     |
| react-native-safe-area-context         | 4.6.3      |
| react-native-screens                   | ~3.22.0    |
| react-native-swiper                    | ^1.6.0     |
| react-redux                            | ^9.1.0     |
| yup                                    | ^1.3.3     |

| Símbolo   | Explicación                                                             |
|-----------|-------------------------------------------------------------------------|
| ^         | Indica que se acepta cualquier versión compatible con la indicada.     |
| ~         | Indica que se aceptan solo versiones que sean parches de la indicada.   |
| =         | Indica que se acepta solo la versión exacta especificada.               |
| >=        | Indica que se aceptan versiones iguales o superiores a la indicada.     |
| <         | Indica que se aceptan versiones inferiores a la indicada.               |
| ^4.3.2    | Acepta versiones mayores o iguales a 4.3.2 pero menores que 5.0.0.      |
| ~1.2.3    | Acepta versiones que sean parches de 1.2.3, como 1.2.4, 1.2.5, etc.      |
| =1.2.3    | Acepta solo la versión exacta 1.2.3.                                    |
| >=1.2.3   | Acepta versiones iguales o superiores a 1.2.3.                         |
| <1.2.3    | Acepta versiones inferiores a 1.2.3.   

---

     Logo del emprendimiento TIME FOR YOU
![Logo del Emprendimineto](/assets/img/logo-time-for-you.png "Logo del emprendimiento")

#Capturas de pantalla del proyecto

### Aqui se adjuntaran 6 imagenes del proyecto

     Captura numero 1 TIME FOR YOU

![Perfil de usuario](/assets/img/capturas-proyecto/captura1.jpg "Perfil de usuario")

---
     Captura numero 2 TIME FOR YOU
![Perfil de usuario](/assets/img/capturas-proyecto/captura2.jpg "Perfil de usuario")   

---
     Captura numero 3 TIME FOR YOU
![Perfil de usuario](/assets/img/capturas-proyecto/captura3.jpg "Perfil de usuario") 

---
     Captura numero 4 TIME FOR YOU
![Perfil de usuario](/assets/img/capturas-proyecto/captura4.jpg "Perfil de usuario") 

---
     Captura numero 5 TIME FOR YOU
![Perfil de usuario](/assets/img/capturas-proyecto/captura5.jpg "Perfil de usuario")   

---
     Captura numero 6 TIME FOR YOU
![Perfil de usuario](/assets/img/capturas-proyecto/captura6.jpg "Perfil de usuario") 
