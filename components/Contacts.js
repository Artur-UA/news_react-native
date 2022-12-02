import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image, StyleSheet, Modal} from 'react-native';
import {stylesGlobal} from '../styles/styles'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import Form from './Form'

export default function Contacts({navigation, route}) { //route добавляется автоматически, потому что Contacts добавляется в файле navigate через Stack.Navigator
    /* const openPreviousPage = () => {
        navigation.goBack(); // .goBack() вернет нас на предыдущую страницу 
    } */

    /* const [modalWindow, setModalWindow] = useState(false) */
    return (
        <View style={stylesGlobal.container}>
            <StatusBar style="auto" />
            <Image 
                source={{uri: route.params.img}}
                style={{width: 100, height: 100}}
            />
            <Text style={stylesGlobal.text}>{route.params.title}</Text>
            <Text style={[stylesGlobal.newsSub, styles.textFull]}>{route.params.text}</Text>
            {/* <Modal visible={modalWindow}>
                <View style={[ styles.containers, styles.modal ]}>
                    <Text style={ styles.modalText}>Forms: </Text>
                    <MaterialCommunityIcons name="close-box" size={24} color="blue"  onPress={()=> setModalWindow(false)} />
                    <Form/>
                </View>
            </Modal>
            <MaterialIcons name="add-box" style={styles.addButton} size={24} color="red" onPress={()=> setModalWindow(true)}/> */}
           {/*  <Button title='Back previous page' onPress={openPreviousPage}/> */}
        </View>
    )
}
const styles = StyleSheet.create({
  textFull: {
      paddingTop: 25,
      color: 'white'
  },
  addButton:{
    paddingTop: 15
  },
  modal:{
    paddingTop: 50,
  },
  containers:{
    backgroundColor: 'black',
    alignItems: 'center',
    height: '100%'
  },
  modalText: {
    color: 'white',
    fontSize: 22,
    paddingBottom: 30
  },
})