import React from 'react';
import { View, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function ToDoList() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TO DO LIST</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="New Task" onChangeText={() => {}}/>
                
                <TouchableOpacity style={styles.inputButton} onPress={() => {}}>
                    <Text style={{fontWeight: 'bold',}}> Add </Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={[1,2,3,4,5,6,7,8,9,10]} 
                showsVerticalScrollIndicator={false}
                style={styles.taskList}
                keyExtractor={task => String(task)}
                renderItem={() => (
                    <View style={styles.taskContainer}>
                        <Text style={styles.taskText}> To do 1 </Text>
    
                        <View style={styles.taskButtonsContainer}>
                            <TouchableOpacity style={styles.taskButton} onPress={() => {}}>
                                <Text style={styles.taskButtonText}> Remove </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.taskButton} onPress={() => {}}>
                                <Text style={styles.taskButtonText}> Toggle </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

        </View>
    );
}