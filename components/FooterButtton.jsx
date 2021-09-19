import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, } from "react-native";

export default function FooterButton(props) {
    const {label} = props;
    return (
        <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.Text}>{label}</Text>
        </TouchableOpacity>
    );
}


// FooterButton.propTypes = {
//     label: string.isRequired,
// };

const styles = StyleSheet.create({
    footerButton: {
        flex: 1,
    },
    Text:{
        fontSize: 24,
        color: "black"
    },
})


