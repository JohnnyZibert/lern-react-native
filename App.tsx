import {Alert, StyleSheet, View} from 'react-native';
import * as Font from 'expo-font'
import React, {useState} from "react";
import AppLoading from 'expo-app-loading'

import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoInfoScreens} from "./src/screens/TodoInfoScreens";


async function loadApplication() {
    await Font.loadAsync({
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
    })

}

export interface ITodo {
    id: string,
    title: string,
    complete: boolean,
}


const App: React.FC = () => {
    const [isReady, setReady] = useState<boolean>(false)
    const [todos, setTodos] = useState<ITodo[]>([])
    const [todoId, setTodoId] = useState<string | null>(null)

    if (!isReady) {
    return <AppLoading startAsync={loadApplication}
                       onError={err=>console.log(err)}
                       onFinish={()=>setReady(true)}/>
    }

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

    const upDateTitle = (id: string, title: string) => {
        setTodos((old) => old.map((todo) => {
            if (todo.id === id) {
                todo.title = title
            }
            return todo
        }))
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
            deleteTodoInfo={deleteTodo}
            onSaveHandler={upDateTitle}
        />
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