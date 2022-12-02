import { Formik } from 'formik';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image, StyleSheet, Modal} from 'react-native';
import {stylesGlobal} from '../styles/styles'
import { TextInput } from 'react-native-web';

export default function Contacts({addNews}) {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Formik initialValues={{ title: '', subtitle: '', text: '', img:'' }}
                onSubmit={ (values, action) => {
                    addNews(values);
                    action.resetForm(); //action это встроеное доступный параметр. у которого можно вызвать метод resetForm и очистить форму
                }}
            >
                { (props) => (  // чтобы работал formik, нужно открыть фигурные скобки (говорим что пишем js) props это параметр для получения данных  
                    <View >
                        <TextInput 
                            style={styles.input}
                            value={props.values.name} //все что мы напишем в инпуте, запишется через props в форму 
                            placeholder='Enter the title'
                            onChangeText={props.handleChange('title')} // встроенная функция, которая показыввет в какое значение, мы подставляем текст. тоесть если текст меняется, мы изменяем title. а он в свою очередь отображается в values 
                        />
                        <TextInput 
                            style={styles.input}
                            value={props.values.subtitle} 
                            placeholder='Enter the subtitle'
                            onChangeText={props.handleChange('subtitle')} 
                        />
                        <TextInput 
                            style={styles.input}
                            value={props.values.text} 
                            multiline // чтобы было больше одной строки, увеличится при написании
                            placeholder='Enter the text'
                            onChangeText={props.handleChange('text')} 
                        />
                        <TextInput 
                            style={[styles.input, styles.lastInput]}
                            value={props.values.img} 
                            placeholder='Enter the url img'
                            onChangeText={props.handleChange('img')} 
                        />
                        <Button title='Add news' onPress={props.handleSubmit} />  
                    </View>//handleSubmit встроенная функция от formik  
                )}
            </Formik>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 10,
        borderColor: 'silver',
        borderRadius: 5,
        color: 'white'
    },
    lastInput: {
        marginBottom: 20
    }
})