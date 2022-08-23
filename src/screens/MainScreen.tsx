import { Dimensions, FlatList, Image, StyleSheet, View} from "react-native";
import React, {useEffect, useState} from "react";

import {ITodo} from "../../App";
import {AddTodo} from "../components/AddTodo";
import {TodoItem} from "../components/TodoItem";
import {AppFontText} from "../ui/AppFontText";
import {THEME} from "../components/constans";


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
    const [widthDevice, setWidthDevice] = useState(Dimensions.get("window").width -  THEME.PADDING_HORIZONTAL)

    useEffect(() => {
            const update = () => {
                const width = Dimensions.get("window").width - THEME.PADDING_HORIZONTAL
                setWidthDevice(width)
            }
            const myListener = Dimensions.addEventListener('change', update)
            return () => {
                myListener.remove()
            }

        }
    )
//<View style={{width:'100%'}}> помогла бы адаптировать туду к экрану в
// горизонтальном положении, но для тренировки делаем по другому
    const content = todos.length ? <View style={{...styles.wrap, width: widthDevice}}>
            <FlatList data={todos}
                      keyExtractor={item => item.id}
                      renderItem={({item}) => <TodoItem deleteTodo={deleteTodo} todo={item}
                                                        openTodoInfo={onOpenTodoInfo}/>}/>
        </View>
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
wrap:{
    justifyContent:"center",
    paddingLeft: THEME.PADDING_HORIZONTAL
},
    blockTodo: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginBottom: 20,
       alignItems:"center",
    },
    imgContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    noteText: {
        fontSize: 25,
        marginBottom: 10,
    },
    noteImg: {
        width: '100%',
        height: '100%',
        resizeMode:"contain"


    }
})