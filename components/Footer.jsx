import React from "react";
import { View, StyleSheet} from "react-native";
import FooterButton from "./FooterButtton";

export default function Footer() {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.footerButton}>
                <FooterButton label="私の友達"/>
                <FooterButton label="代理メッセージ送信"/>
                <FooterButton label="受信メッセージ"/>
                <FooterButton label="私の設定"/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    footerContainer: {
        height: 100,
        width: "100%",
        position: "absolute",
        top: '85%',
    },

    footerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 15,
    },
})
