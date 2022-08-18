import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ITodo} from "../App";

export interface TodoState {
    todo: ITodo
    deleteTodo: (id:string) => void
}

export const TodoItem: React.FC<TodoState> = ({todo,deleteTodo}) => {

    const handleOnDeleteTodo = ()=> {
        deleteTodo(todo.id)
    }

    return (
        <TouchableOpacity activeOpacity={0.7}
                          onPress={()=>console.log('press on todo',todo.id)}
                          onLongPress={handleOnDeleteTodo}>
            <View style={styles.todoItem}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todoItem: {
        borderColor: 'blue',
        borderRadius: 5,
        borderWidth: 1,
        width: '100%',
        padding: 5,
        paddingBottom: 10,
        marginBottom: 10,
        alignItems: "center",

    }
})