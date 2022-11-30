import { StyleSheet } from 'react-native';

export const stylesGlobal = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    text: {
        color: 'white',
        fontFamily: 'reg',
        fontSize: 40,
    },
    news:{
      color: 'black',
      fontFamily: 'bold',
      marginBottom: 10,
    },
    newsSub:{
      color: 'green'
    },
    newsBut:{
      backgroundColor: "#fff",
      margin: 15,
      padding: 15,
      alignItems: 'center',
      borderRadius: 10
    },
    button:{
      paddingBottom: 20
    }
});
