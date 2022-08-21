import {View, StyleSheet} from "react-native";
import React from "react";

interface IAppCartProps {
    children: React.ReactNode
    stylesCart: {},
}

export const AppCart: React.FC<IAppCartProps> = (props) => {
    return (
        <View style={ {...styles.default,...props.stylesCart}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    default: {
        marginBottom:20,
        flexDirection:'row',
        justifyContent: "space-between",
        alignItems:"center",
        padding:20,
        shadowRadius: 3,
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowOffset:{width:3, height:3},
        backgroundColor:'#fff',
        elevation: 10,


    }
})