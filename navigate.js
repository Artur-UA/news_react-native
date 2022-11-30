import Main from "./components/Main";
import Contacts from "./components/Contacts";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen // кто первый, тот и главный 
                    name='First'
                    component={Main}
                    options={ 
                        {
                            title: 'Main page',
                            headerStyle: { backgroundColor: 'red'}, //весь header 
                            headerTitleStyle: { color: 'white'} // только текст 
                        }
                    }
                />
                <Stack.Screen 
                    name='Contact'
                    component={Contacts}
                    options={ {title: 'Contact page'}}
                />  
            </Stack.Navigator>
        </NavigationContainer>
    )
}