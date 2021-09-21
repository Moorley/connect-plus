import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native";

export default function DecisionButton(props) {
    const {decisionLabel} = props;
    return(
        <TouchableOpacity style={styles.DecisionButton}>
            <Text
                style={styles.title}
                onPress={() => Alert.alert("次の画面に映ります")}
            >
                {decisionLabel}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    DecisionButton: {
        width: 100,
        height: 64,
        backgroundColor: "#467FD3",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
    },
})
