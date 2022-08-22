import {StyleSheet, Text} from "react-native";
import React from "react";

interface IAppFontText {
    children: React.ReactNode
    style?:{}
}

export const AppFontText:React.FC<IAppFontText> = ({children,style}) =>
    <Text style={{...styles.default,...style}}>{children}</Text>

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-regular'
    }
})