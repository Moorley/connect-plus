import React from "react";
import { View, StyleSheet, Text  } from "react-native";

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerInner}>
                <Text style={styles.headerText}>誰の緊急れんらくですか</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: 150,
        justifyContent: "flex-end",
    },

    headerInner: {
        alignItems: "center",
    },

    headerText: {
        fontSize: 24,
        paddingBottom: 8,
        fontWeight: "bold",
    },

})
