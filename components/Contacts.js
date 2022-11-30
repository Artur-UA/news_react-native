import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import {stylesGlobal} from '../styles/styles'


export default function Contacts({navigation, route}) { //route добавляется автоматически, потому что Contacts добавляется в файле navigate через Stack.Navigator
    /* const openPreviousPage = () => {
        navigation.goBack(); // .goBack() вернет нас на предыдущую страницу 
    } */
    console.log(route);
    return (
        <View style={stylesGlobal.container}>
            <StatusBar style="auto" />
            <Text style={stylesGlobal.text}>{route.params.title}</Text>
            <Text style={stylesGlobal.newsSub}>{route.params.text}</Text>
           {/*  <Button title='Back previous page' onPress={openPreviousPage}/> */}
        </View>
    )
  
}