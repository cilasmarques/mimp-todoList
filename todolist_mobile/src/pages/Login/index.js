import React from 'react';
import { useNavigation} from '@react-navigation/native';
import { View, TouchableOpacity, Text, TextInput} from 'react-native';

import styles from './styles'
import { color } from 'react-native-reanimated';

export default function Login() {

    const navigation = useNavigation();
    
    function navigateTodoList() {
        navigation.navigate("TodoList");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TO DO LIST</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Login" onChangeText={() => {}}/>
                <TextInput style={styles.input} placeholder="Password" onChangeText={() => {}}/>
                
                <TouchableOpacity style={styles.loginButton} onPress={() => navigateTodoList}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.details}> Don't have a account? 
                        <Text style={styles.details, {color: '#a0e03a'}}> Register </Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.details}> Forgot password?
                        <Text style={styles.details, {color: '#a0e03a'}}> Reset here </Text>
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}