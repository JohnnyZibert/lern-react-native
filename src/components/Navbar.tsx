import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import {THEME} from "./color-styles";

interface INavbar {
    title: string
}

export const Navbar: React.FC<INavbar> = ({title}) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: THEME.MAIN_COLOR,
        height: 70,
        justifyContent: "flex-end",
        alignItems: 'center',
        padding: 10,
    },
    text: {
        color: "#fff",
        fontSize: 20,
    }
})