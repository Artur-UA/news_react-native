import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, FlatList, Image, Modal } from 'react-native';
import {stylesGlobal} from '../styles/styles'
import Form from './Form'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Main({navigation}) { //navigation добавляется автоматически в файле navigator.js я его не доабвляю, он сам 
    const openContactPage = () => {
        navigation.navigate('Contact') // у navigation есть встроенная функция navigate, которая при срабатывании отроет страницу, имя(свойство name) которое мы вставим в нее
    }
    const [news, setNews] = useState( [
        {title: 'google', subtitle: 'it-company', text: 'Biggest it company in worlds', key: '1', img: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'},
        {title: 'apple', subtitle: 'tech-company', text: 'Biggest tech company in worlds', key: '2', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png'},
        {title: 'microsoft', subtitle: 'pc-tech - company', text: 'Biggest pc-tech company in worlds', key: '3', img: 'https://www.pngplay.com/wp-content/uploads/3/Windows-Microsoft-Logo-Transparent-PNG.png'},
    ])

    const [modalWindow, setModalWindow] = useState(false)

    const addNews = (newNews) => {
        newNews.key = Math.random().toString(36).substring(7);
        setNews([...news, newNews]);
        setModalWindow(false); 
    }

    return (
        <View style={stylesGlobal.container}>
            <StatusBar style="auto" />
            <Text style={stylesGlobal.text}>Main page</Text>
            <MaterialIcons name="add-box" style={styles.addButton} size={24} color="red" onPress={()=> setModalWindow(true)}/>
            <FlatList data={news} renderItem={ ( {item} ) => (
                <TouchableOpacity style={stylesGlobal.newsBut} onPress={ () => navigation.navigate('Contact', item) }>
                    <Text style={stylesGlobal.news}>{item.title}</Text>
                    <Image source={{
                            uri: item.img,
                        }}
                        style={{width: 100, height: 100}}
                    />
                    <Text style={stylesGlobal.newsSub}>{item.subtitle}</Text>
                </TouchableOpacity>
            )}/> 
            {/* <Button style={stylesGlobal.button} title='Open contact' onPress={openContactPage}/> */}
            <Modal visible={modalWindow}>
                <View style={[ styles.containers, styles.modal ]}>
                    <Text style={ styles.modalText}>Forms: </Text>
                    <MaterialCommunityIcons name="close-box" size={24} color="blue"  onPress={()=> setModalWindow(false)} />
                    <Form addNews={addNews}/>
                </View>
            </Modal>
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