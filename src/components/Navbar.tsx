import React from "react";
import {View, StyleSheet, Platform} from 'react-native'
import {THEME} from "./constans";

import {AppBoldFont} from "../ui/AppBoldFont";

interface INavbar {
    title: string
}

export const Navbar: React.FC<INavbar> = ({title}) => {

    return (
        <View style={{
            ...styles.headerContainer, ...Platform.select({
                    ios: styles.navbarIos,
                    android: styles.navbarAndroid
                }
            )
        }}>
            <AppBoldFont style={styles.text}>{title}</AppBoldFont>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {

        height: 70,
        justifyContent: "flex-end",
        alignItems: 'center',
        padding: 10,
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR
    },
    navbarIos: {
        backgroundColor: '#fff',
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : "#fff",
        fontSize: 20,
    }
})