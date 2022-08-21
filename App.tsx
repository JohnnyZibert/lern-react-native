import {Alert,  StyleSheet, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import React, { useState} from "react";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoInfoScreens} from "./src/screens/TodoInfoScreens";

export interface ITodo {
    id: string,
    title: string,
    complete: boolean,
}


const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [todoId, setTodoId] = useState<string | null>(null)

    const addTodos = (title: string) => {
        const newTodo: ITodo = {
            id: Date.now().toString(),
            title,
            complete: false,
        }
        setTodos(prev => [...prev, newTodo])
    }
    const deleteTodo = (id: string) => {
        const todo = todos.find(t => t.id === id)
        Alert.alert(
            "Удаление задачи",
            `Вы уверены в удалении задачи ${todo?.title}`,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        setTodoId(null)
                        setTodos(prev => prev.filter((todo) => todo.id !== id))
                    }
                }
            ]
        );

    }

    let content = <MainScreen addTodos={addTodos}
                              todos={todos}
                              deleteTodo={deleteTodo}
                              onOpenTodoInfo={(id) => setTodoId(id)}
    />

    if (todoId) {
        const selectTodo = todos.find((todo) => todo.id === todoId)

        content = <TodoInfoScreens
            onBackToListTodo={() => setTodoId(null)}
            todo={selectTodo!}
            deleteTodoInfo={deleteTodo}/>
    }

    return (
        <View style={styles.container}>
            <Navbar title={"Todo"}/>
            {content}

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