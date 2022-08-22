import {Alert, Button, Modal, StyleSheet, TextInput, View} from "react-native";
import React, {useState} from "react";
import {THEME} from "./color-styles";

import {ITodo} from "../../App";

interface IEditModalProps {
    modalVisible: boolean
    setModalVisible: (b: boolean) => void
    value: string
    todo: ITodo
    onSave:(title:string)=>void
}

export const EditModal: React.FC<IEditModalProps> = ({
                                                         onSave,
                                                         setModalVisible,
                                                         modalVisible,
                                                         value
                                                     }) => {
    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if(title.trim().length < 3) {
            return Alert.alert('Ошибка!', `Минимальное количество введённых символов 3`)
        } else {
            onSave(title)
        }
    }

    return (
        <Modal
            animationType="slide"
            visible={modalVisible}

        >
            <View style={styles.contentContainer}>
                <TextInput style={styles.input}
                           autoCorrect={false}
                           autoCapitalize={"none"}
                           placeholder={'Введите новое значение'}
                           maxLength={64}
                           value={title}
                           onChangeText={setTitle}/>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button title={'Cancel'}
                                onPress={() => setModalVisible(false)}
                                color={THEME.RED_BTN}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title={'Save'} onPress={saveHandler}></Button>
                    </View>
                </View>
            </View>
        </Modal>

    )
}
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    input: {
        padding: 10,
        width: '80%',
        borderBottomWidth: 2,
        borderColor: THEME.MAIN_COLOR,
        marginBottom: 20,

    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: '100%',
    },
    button: {
        width: '20%',
    }
})