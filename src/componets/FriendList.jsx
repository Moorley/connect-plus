import React from "react";
import { View, StyleSheet, Text } from "react-native";


export default function FriendList() {
    return (
        <View style={styles.friendListContainer}>
            <Text>友人リスト</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    friendListContainer: {
        alignItems: "center",
    }
})
