import { useState } from 'react';
import AppLoading from 'expo-app-loading';
/* import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {stylesGlobal} from './styles/styles'
import Main from './components/Main'; */
import * as Font from 'expo-font'
import Navigation from './navigate'

const fonts = () => Font.loadAsync({ // loadAsync - для асинхронной загрузки. 
  'reg': require('./fonts/PlayfairDisplay-Regular.ttf'),
  'bold': require('./fonts/PlayfairDisplay-Bold.ttf'),
})
export default function App() {

  const [font, loadFont] = useState(false); // если загрузит стили, то будет true. иначе будет false и будет работать AppLoading

  if (font) {
    return (
      <Navigation/>
    );
  } else {
    return (
      <AppLoading 
        startAsync={fonts}  // чего именно будет ждать загрузки 
        onFinish={ () => loadFont(true)} // когда загрузит, сработает это
        onError={console.warn} // обработка ошибки
        />
    )
  }
  
}