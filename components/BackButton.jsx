import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native";

export default function BackButton() {
    return(
        <TouchableOpacity style={styles.BackButton}>
            <Text
                style={styles.title}
                onPress={() => Alert.alert("前の画面に戻ります")}
            >
                戻る
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    BackButton: {
        width: 100,
        height: 64,
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
    },
})
