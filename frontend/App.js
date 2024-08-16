import { StyleSheet } from 'react-native';
import React from 'react';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateNote from './src/screens/CreateNote';
import ShowNote from './src/screens/ShowNote';
import User from './src/screens/User';
import AllLabels from './src/screens/AllLabels';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right',
                    gestureEnabled: true,
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name='CreateNote' component={CreateNote}
                    options={{
                        headerShown: true, 
                        title: 'Create Note', 
                        headerStyle: { backgroundColor: '#ff8856' }, 
                        headerTintColor: '#fff', 
                        headerTitleStyle: { fontWeight: 'bold' },
                    }}
                />
                <Stack.Screen name='Note' component={ShowNote}
                    options={{
                        headerShown: true, 
                        title: 'Note', 
                        headerStyle: { backgroundColor: '#ff8856' }, 
                        headerTintColor: '#fff', 
                        headerTitleStyle: { fontWeight: 'bold' },
                    }}
                />
                <Stack.Screen name='User' component={User}
                    options={{
                        headerShown: true, 
                        title: 'My Account', 
                        headerStyle: { backgroundColor: '#ff8856' }, 
                        headerTintColor: '#fff', 
                        headerTitleStyle: { fontWeight: 'bold' },
                    }}
                />
                <Stack.Screen name='AllLabels' component={AllLabels}
                    options={{
                        headerShown: true, 
                        title: 'All Labels', 
                        headerStyle: { backgroundColor: '#ff8856' }, 
                        headerTintColor: '#fff', 
                        headerTitleStyle: { fontWeight: 'bold' },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({});
