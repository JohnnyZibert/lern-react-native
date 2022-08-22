import React from "react";
import {View, StyleSheet} from 'react-native'
import {THEME} from "./color-styles";

import {AppBoldFont} from "../ui/AppBoldFont";

interface INavbar {
    title: string
}

export const Navbar: React.FC<INavbar> = ({title}) => {
    return (
        <View style={styles.headerContainer}>
            <AppBoldFont style={styles.text}>{title}</AppBoldFont>
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