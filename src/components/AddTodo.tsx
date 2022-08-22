import {Alert, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from "react";
import { AntDesign } from '@expo/vector-icons';


export interface ITodoFormType {
    addTodos(title: string): void
}

export const AddTodo: React.FC<ITodoFormType> = props => {
    const [value, setValue] = useState('')

    const handleOnPress = () => {
        if (value.trim()) {
            props.addTodos(value)
            setValue('')
        } else {
            Alert.alert('Введите задачу!')
        }

    }

    return (
        <View style={styles.addWrapper}>
            <TextInput style={styles.input}
                       onChangeText={text => setValue(text)}
                       value={value}
                       placeholder={'Введите задачу'}
                       autoCorrect={false}
                       autoCapitalize={"none"}/>
            <View style={styles.addButton}>
            <AntDesign.Button
                name="pluscircleo"
                size={24} color="white"
                onPress={handleOnPress}>Добавить</AntDesign.Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    addWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",


    },
    input: {
        width: '70%',
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        padding: 10,
        alignItems: "center",
    },
    addButton:{
        alignItems:"center",
        justifyContent:"center",
    }
})