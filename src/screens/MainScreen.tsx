import {FlatList, StyleSheet, View} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {TodoItem} from "../components/TodoItem";
import React from "react";
import {ITodo} from "../../App";

interface IMainScreenProps {
    todos: ITodo[],
    addTodos: (title: string) => void,
    deleteTodo: (id: string) => void,
    onOpenTodoInfo: (id: string) => void,
}

export const MainScreen: React.FC<IMainScreenProps> = ({todos, addTodos, deleteTodo, onOpenTodoInfo}) => {


    return (
        <View>
            <View style={styles.blockTodo}>
                <AddTodo addTodos={addTodos}/>
            </View>
            <FlatList style={styles.taskBlock}
                      data={todos}
                      keyExtractor={item => item.id}
                      renderItem={({item}) => <TodoItem deleteTodo={deleteTodo} todo={item} openTodoInfo={onOpenTodoInfo}/>}/>
        </View>
    )
}


const styles = StyleSheet.create({
    blockTodo: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginBottom: 20,
    },
    taskBlock: {
        marginHorizontal: 25,
    }
})