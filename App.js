import React, { useState } from "react";
import {View, StyleSheet, Image, ScrollView, Text, Modal, Button, TouchableHighlight} from 'react-native';

const App = () => {
  const [modalVisibleHabitacion01, setModalVisibleHabitacion01] = useState(false);
  const [modalVisibleHabitacion02, setModalVisibleHabitacion02] = useState(false);
  const [modalVisibleHabitacion03, setModalVisibleHabitacion03] = useState(false);
  return(
    <>
    <ScrollView style={styles.body}>
    <Modal transparent={true} animationType="slide" visible={modalVisibleHabitacion01} onRequestClose={() => { alert('Modal has been closed'); }}>
            <View style={styles.vistaModal}>
              <View style={styles.Modal}>
                <Text style={styles.subtitulo}>Suit</Text>
                <Text>Suites con vista espectacular de la ciudad, espacio amplio con equipamiento y servicios añadidos en los que no te faltará de nada, 
                  incluso jacuzzi y otros lujos.</Text>
                
                <Button title="Cerrar" onPress={() => {setModalVisibleHabitacion01(!modalVisibleHabitacion01)}}></Button>
              </View>
            </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisibleHabitacion02} onRequestClose={() => { alert('Modal has been closed'); }}>
            <View style={styles.vistaModal}>
              <View style={styles.Modal}>
                <Text style={styles.subtitulo}>Habitación familiar</Text>
                <Text>Para un viaje en familia como un viaje individual pero con necesidad de una habitación más grande, 
                  esta habitación está equipada para incluir cama doble o solo una cama matrimonial, que incluye espacio para un escritorio y un lugar para guardar las maletas.</Text>
                <Button title="Cerrar" onPress={() => {setModalVisibleHabitacion02(!modalVisibleHabitacion02)}}></Button>
              </View>
            </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisibleHabitacion03} onRequestClose={() => { alert('Modal has been closed'); }}>
            <View style={styles.vistaModal}>
              <View style={styles.Modal}>
                <Text style={styles.subtitulo}>Habitacion Individual</Text>
                <Text>Tendrás el espacio suficiente que necesitas descansar durante tus viajes profesionales o de ocio.</Text>
                <Button title="Cerrar" onPress={() => {setModalVisibleHabitacion03(!modalVisibleHabitacion03)}}></Button>
              </View>
            </View>
        </Modal>

        <View style={{flexDirection: 'row'}}>
            <Image 
              style={styles.banner}
              source={require('./src/img/hotelVista.jpg')} />
        </View>

        <Text style={styles.tituloHotel}>Hotel</Text>
        <Text style={styles.textoIntro}>Este es nuestro hotel! Estamos ubicados en la capital de Japon, con muchos lugares atractivos historicos y 
        diseños unicos!. </Text>
        
        <Text style={styles.textoIntro}>Contamos con servicios de lujosa comodidad tales como conexión Wi-Fi, servicio de 
        habitación (incluso cada habitación posee una máquina especial para la preparación de todo tipo de bebidas calientes), una tienda de regalos, 
        entre otros. Hay diferentes lugares de recreación como un gimnasio, bar y restaurante y hasta salas de conferencia para las empresas.</Text>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Tipos de habitaciones</Text>
          <ScrollView horizontal>
            <View>
            <TouchableHighlight onPress={() => {setModalVisibleHabitacion01(!modalVisibleHabitacion01)}}>
              <Image
                style={styles.habitacion}
                source={require('./src/img/habitacion01.jpg')} />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight onPress={() => {setModalVisibleHabitacion02(!modalVisibleHabitacion02)}}>
                <Image
                  style={styles.habitacion}
                  source={require('./src/img/habitacion02.jpg')} />
                </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight onPress={() => {setModalVisibleHabitacion03(!modalVisibleHabitacion03)}}>
                <Image
                  style={styles.habitacion}
                  source={require('./src/img/habitacion03.jpg')} />
                </TouchableHighlight>
            </View>
          </ScrollView>
        </View>

        <View style={styles.seccionServicios}>
          <Text style={styles.titulo}>Nuestros servicios</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
              <View>
                  <Image
                    style={styles.mejores}
                    source={require('./src/img/servicio01.png')} />
                  <Text style={styles.textoServicio}>Servicio de internet</Text>
              </View>
            </View>
            <View style={styles.listaItem}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/servicio02.png')} />
                <Text style={styles.textoServicio}>Gimnasio, restaurante y bar</Text>
            </View>
            <View style={styles.listaItem}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/servicio03.jpg')} />
                <Text style={styles.textoServicio}>Servicion de habitacion</Text>
            </View>
            <View style={styles.listaItem}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/servicio04.jpg')} />
                <Text style={styles.textoServicio}>Tienda de recuerdos</Text>
            </View>
          </View>
        </View>

        <Text style={styles.titulo}>Lugares a visitar</Text>
        <View>
          <View>
            <View style={styles.card}>
              <Image
                style={styles.mejores}
                source={require('./src/img/lugar01.png')} />
              <Text style={styles.lugar}>Museo Nacional de Ciencias Naturales</Text>              
            </View>
          </View>
          <View>
            <View style={styles.card}>
              <Image
                style={styles.mejores}
                source={require('./src/img/lugar02.png')} />
              <Text style={styles.lugar}>Distrito Ginza</Text>              
            </View>
          </View>
          <View>
            <View style={styles.card}>
              <Image
                style={styles.mejores}
                source={require('./src/img/lugar03.png')} />
              <Text style={styles.lugar}>Palacio Imperial</Text>            
            </View>
          </View>
          <View>
            <View style={styles.card}>
              <Image
                style={styles.mejores}
                source={require('./src/img/lugar04.png')} />
              <Text style={styles.lugar}>Parque Ueno</Text>
            </View>
          </View>
        </View>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  body:{
    backgroundColor:'#e8eddf',
  },
  banner:{
    height:250,
    flex:1,
  },
  tituloHotel:{
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#6e1490',
    color: 'white',
  },
  textoIntro:{
    textAlign: 'justify',
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  titulo:{
    fontSize: 24,
    marginVertical: 10,
    marginLeft: 7,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  contenedor:{
    marginHorizontal: 10,
  },
  mejores:{
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listaItem:{
    flexBasis:'49%',
  },
  listado:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vistaModal:{
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal:{
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  habitacion:{
    width: 250,
    height: 300,
    marginRight: 10,
  },
  subtitulo:{
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
  card:{
    padding: 10,
    margin: 5,
    backgroundColor: '#cfdbd5',
    borderRadius: 5,
  },
  lugar:{
    fontSize: 24,
    margin: 2,
    fontWeight: 'bold',
    color: '#25494b',
  },
  texto:{
    textAlign: 'justify',
    fontSize: 18,
  },
  seccionServicios:{
    backgroundColor: '#f5cb5c',
    padding: 6,
    marginTop: 20,
  },
  textoServicio:{
    fontSize:18,
  }
})

export default App;