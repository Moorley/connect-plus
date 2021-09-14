import label from "prop-types";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity  } from "react-native";

export default function FooterButton(props) {
    const label = props.label;
    return (
        <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.Text}>{label}</Text>
        </TouchableOpacity>
    );
}


FooterButton.propTypes = {
    label: null,
};

const styles = StyleSheet.create({
    footerButton: {
    },
    Text:{
        fontSize: 24,
        color: "black"
    },
})


