import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, View, TouchableOpacity, FlatList } from 'react-native';
import {stylesGlobal} from '../styles/styles'


export default function Main({navigation}) { //navigation добавляется автоматически в файле navigator.js я его не доабвляю, он сам 
    const openContactPage = () => {
        navigation.navigate('Contact') // у navigation есть встроенная функция navigate, которая при срабатывании отроет страницу, имя(свойство name) которое мы вставим в нее
    }
    const [news, setNews] = useState( [
        {title: 'google', subtitle: 'it-company', text: 'Biggest it company in worlds', key: '1'},
        {title: 'apple', subtitle: 'tech-company', text: 'Biggest tech company in worlds', key: '2'},
        {title: 'microsoft', subtitle: 'pc-tech - company', text: 'Biggest pc-tech company in worlds', key: '3'},
    ])

    return (
        <View style={stylesGlobal.container}>
            <StatusBar style="auto" />
            <Text style={stylesGlobal.text}>Main page</Text>
            <FlatList data={news} renderItem={ ( {item} ) => (
                <TouchableOpacity style={stylesGlobal.newsBut} onPress={ () => navigation.navigate('Contact', item) }>
                    <Text style={stylesGlobal.news}>{item.title}</Text>
                    <Text style={stylesGlobal.newsSub}>{item.subtitle}</Text>
                </TouchableOpacity>
            )}/> 
            {/* <Button style={stylesGlobal.button} title='Open contact' onPress={openContactPage}/> */}
        </View>
    )
  
}