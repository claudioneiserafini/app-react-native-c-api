import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import UserListScreen from './src/Screens/UserList';
import WelcomeScreen from './src/Screens/Welcome';
import UserShowScreen from './src/Screens/UserShow';
import UserEditScreen from './src/Screens/UserEdit';
import UserCreateScreen from './src/Screens/UserCreate';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>  
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="UserList" component={UserListScreen} />
                <Stack.Screen name="UserShow" component={UserShowScreen} />
                <Stack.Screen name="UserEdit" component={UserEditScreen} />
                <Stack.Screen name="UserCreate" component={UserCreateScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </PaperProvider>
  );
}

export default App;