import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

/*
未実装ページの画面遷移用
*/

const ScreenTransition_1 = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.TitleContainer} onPress={onPress}>
            <Text style={styles.Titletxt}>画面遷移ボタン</Text>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({

    TitleContainer: {
        backgroundColor: "#fff",
        width: "20%",
        height: "10%",
        alignItems: "center",
        justifyContent: 'center',
    },

    Titletxt: {
        fontSize: 20,
        fontWeight: "700",
        color:"red",

    },

});


export default ScreenTransition_1;