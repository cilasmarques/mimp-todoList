import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#000000'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    taskContainer: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    taskList: {
        marginTop: 32,
    },

    taskText: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    taskButtonsContainer: {
        fontSize: 14,
        color: '#41414d',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    taskButton: {
        marginTop: 8,
        color: '#222',
        fontSize: 10,
        borderColor: '#a0e03a',
        borderWidth: 1,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#a0e03a',
        fontWeight: 'bold'
    },

    taskButtonText: {
        fontSize: 10,
        color: '#41414d',
        fontWeight: 'bold',
    },

    inputContainer: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    input: {
        borderColor: '#FFF',
        backgroundColor: '#FFF',
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        marginBottom: 10
    },

    details: {
        marginTop: 10,
        fontSize: 20,
        color: '#41414d',
    },

    loginButton: {
        color: '#222',
        fontSize: 15,
        borderColor: '#a0e03a',
        borderWidth: 1,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#a0e03a',
    },
});