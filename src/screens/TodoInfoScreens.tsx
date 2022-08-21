import {Button, Text, View, StyleSheet} from "react-native";
import React from "react";
import {ITodo} from "../../App";
import {THEME} from "../components/color-styles";
import {AppCart} from "../ui/AppCart";

interface ITodoInfoScreensProps {
    onBackToListTodo: () => void
    todo: ITodo
    deleteTodoInfo: (id:string) => void

}

export const TodoInfoScreens: React.FC<ITodoInfoScreensProps> =
    ({onBackToListTodo, todo, deleteTodoInfo}) => {
    return (
        <View style={styles.todoInfoContainer}>
            <AppCart stylesCart={styles.cartContainer}>
                <Text style={styles.title}>
                    {todo.title}
                </Text>
                <Button title={'Edit'}/>
            </AppCart>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title={'Back'} onPress={onBackToListTodo} color={THEME.GREY_BTN}/>
                </View>
                <View style={styles.button}>
                    <Button title={'Delete'} onPress={()=>deleteTodoInfo(todo.id)} color={THEME.RED_BTN}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoInfoContainer: {},
    title: {
        marginVertical: 20,
        fontSize:20,
    },
    buttons: {
        paddingHorizontal: 70,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    button: {
        width: '40%',
    },
    cartContainer: {
        margin:30,
        borderRadius:10,
    }
})