import {Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import React from "react";
import {THEME} from "../components/constans";
import {AppBoldFont} from "./AppBoldFont";

interface IAppButtonProps {
    children: React.ReactNode
    onPress: () => void
    color?: string

}

export const AppButton: React.FC<IAppButtonProps> =
    ({children, onPress, color = THEME.MAIN_COLOR}) => {

    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity



        return (
            // @ts-ignore
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.button, backgroundColor: color}}>
                <AppBoldFont style={styles.text}>{children}</AppBoldFont>
            </View>
        </Wrapper>

    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        borderRadius:5,


    },
    text: {
        color: '#fff',
        fontSize:16,
    }
})