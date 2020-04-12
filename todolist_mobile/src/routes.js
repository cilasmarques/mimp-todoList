import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import ToDoList from './pages/ToDoList';
import Login from './pages/Login';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="ToDoList" component={ToDoList} />
                <AppStack.Screen name="Login" component={Login} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}