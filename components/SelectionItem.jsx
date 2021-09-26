import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, Alert } from 'react-native';


const SelectionItem = () => {
    return (

        <View style={styles.selectionContainer}>
            <View style={styles.selectionButtonContainer}>
                <Button
                    title="戻る"
                    onPress={() => Alert.alert("戻るがタップされました")}
                    color="black"
                >
                </Button>
            </View>

            <View style={styles.selectionButtonContainer}>
                <Button
                    title="送信"
                    onPress={() => Alert.alert("送信がタップされました")}
                    color="black"
                >
                </Button>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    selectionContainer: {
        width: "100%",
        height: "10%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",

    },

    selectionButtonContainer: {
        width: "40%",
        height: "80%",
        flexDirection: "row",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },


});


export default SelectionItem;