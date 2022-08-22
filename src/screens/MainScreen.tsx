import {FlatList, Image, StyleSheet, View} from "react-native";
import React from "react";

import {ITodo} from "../../App";
import {AddTodo} from "../components/AddTodo";
import {TodoItem} from "../components/TodoItem";
import {AppFontText} from "../ui/AppFontText";


interface IMainScreenProps {
    todos: ITodo[],
    addTodos: (title: string) => void,
    deleteTodo: (id: string) => void,
    onOpenTodoInfo: (id: string) => void,
}

export const MainScreen: React.FC<IMainScreenProps> = ({
                                                           todos,
                                                           addTodos,
                                                           deleteTodo,
                                                           onOpenTodoInfo,
                                                       }) => {
    const content = todos.length ? <FlatList style={styles.taskBlock}
                                             data={todos}
                                             keyExtractor={item => item.id}
                                             renderItem={({item}) =>
                                                 <TodoItem deleteTodo={deleteTodo} todo={item}
                                                           openTodoInfo={onOpenTodoInfo}/>}/>
        : <View style={styles.imgContainer}>
            <AppFontText style={styles.noteText}>Добавьте новую запись</AppFontText>
            <Image style={styles.noteImg} source={require('../todo-icon-22.jpg')}/>
        </View>


    return (
        <View>
            <View style={styles.blockTodo}>
                <AddTodo addTodos={addTodos}/>
            </View>
            {content}
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
    },
    imgContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    noteText: {
        fontSize: 25,
        marginBottom:10,
    },
    noteImg: {
        width:300,
        height:400,
        // resizeMode:"contain"


    }
})