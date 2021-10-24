import React from "react";
/*
現在使用していない
ReactNavigationのheaderをデザイン修正する方向
*/
import { View, StyleSheet, Text, } from "react-native";
import { Header } from "react-native-elements/dist/header/Header";

export default function HeaderComponent(props) {
    const title = props;
    return (
        /*
        <View style={styles.headerContainer}>
            <View style={styles.headerInner}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
        */
        <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: title, style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    )
}
/*

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: 100,
        justifyContent: "flex-end",
    },

    headerInner: {
        alignItems: "center",
    },

    headerText: {
        fontSize: 32,
        paddingBottom: 8,
        fontWeight: "bold",
    },

})
*/