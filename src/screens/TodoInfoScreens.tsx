import {View, StyleSheet, Dimensions} from "react-native";
import React, {useState} from "react";


import {ITodo} from "../../App";
import {AppCart} from "../ui/AppCart";
import {EditModal} from "../components/EditModal";
import {AppFontText} from "../ui/AppFontText";
import {THEME} from "../components/constans";
import {AppButton} from "../ui/AppButton";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

interface ITodoInfoScreensProps {
    onBackToListTodo: () => void
    todo: ITodo
    deleteTodoInfo: (id: string) => void
    onSaveHandler:(id:string,title:string)=>void

}


export const TodoInfoScreens: React.FC<ITodoInfoScreensProps> =
    ({onBackToListTodo, todo, deleteTodoInfo,onSaveHandler}) => {

        const [modalVisible, setModalVisible] = useState<boolean>(false);

        const onSave = (title: string) => {
            onSaveHandler(todo.id,title)
            setModalVisible(false)
        }

        return (
            <View style={styles.todoInfoContainer}>
                <EditModal modalVisible={modalVisible}
                           value={todo.title}
                           todo={todo}
                           setModalVisible={setModalVisible}
                           onSave={onSave}/>
                <AppCart stylesCart={styles.cartContainer}>
                    <AppFontText style={styles.title}>
                        {todo.title}
                    </AppFontText>
                    <AppButton onPress={() => setModalVisible(true)}>
                        <FontAwesome5 name="edit" size={24} color="white" />
                    </AppButton>
                </AppCart>
                <View style={styles.buttons}>
                    <View style={styles.button}>

                        <AppButton onPress={onBackToListTodo} color={THEME.GREY_BTN}>
                            <Ionicons name="arrow-back" size={24} color="white" />
                        </AppButton>
                    </View>
                    <View style={styles.button}>
                        <AppButton onPress={() => deleteTodoInfo(todo.id)} color={THEME.RED_BTN}>
                            <AntDesign name="delete" size={24} color="white" />
                        </AppButton>
                    </View>
                </View>
            </View>
        )
    }

const styles = StyleSheet.create({
    todoInfoContainer: {},
    title: {
        marginVertical: 20,
        fontSize: 20,
        fontFamily:'roboto-bold',
    },
    buttons: {
        paddingHorizontal: 70,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    button: {
       width: Dimensions.get('window').width /4
    },
    cartContainer: {
        margin: 30,
        borderRadius: 10,
    }
})