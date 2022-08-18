import {FlatList, StyleSheet, View} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import React, {useState} from "react";
import {TodoItem} from "./src/TodoItem";

export interface ITodo {
    id: string,
    title: string,
    complete: boolean,
}


const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    const addTodos = (title: string) => {
        const newTodo: ITodo = {
            id: Date.now().toString(),
            title,
            complete: false,
        }
        setTodos(prev => [...prev, newTodo])
    }
    const deleteTodo = (id:string) => {
        setTodos(prev=>prev.filter((todo)=>todo.id !== id))
    }

    return (
        <View style={styles.container}>
            <Navbar title={"Todo"}/>
            <View style={styles.blockTodo}>
                <AddTodo addTodos={addTodos}/>
            </View>
            <FlatList style={styles.taskBlock}
                      data={todos}
                      keyExtractor={item => item.id}
                      renderItem={({item}) => <TodoItem deleteTodo={deleteTodo} todo={item}/>}/>
        </View>
    );
}

export default App

const styles = StyleSheet.create({
    container: {},
    blockTodo: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginBottom: 20,
    },
    taskBlock: {
        marginHorizontal: 25,
    }
})