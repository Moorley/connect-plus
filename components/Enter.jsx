import React, {useState} from  'react';
import {
    View, StyleSheet, TextInput, Text, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import BackButton from './BackButton';
import DecisionButton from './DecisionButtton';

export default function Enter() {
    const [elationship, setRelationshipText] = useState("");
    const [message, setMessageText] = useState("");
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}
        >
            <View style={styles.enter} >
                <View style={styles.relationshipContainer}>
                    <Text style={styles.title}>芥川さんとの関係性</Text>
                    <TextInput
                        style={styles.relationshipInput}
                        value={elationship}
                        onChangeText={(text) => {setRelationshipText(text);}}
                        placeholder="関係性を入力してください"
                        multiline
                    />
                </View>
                <View style={styles.messageContainer} >
                    <Text style={styles.title}>メッセージ</Text>
                    <TextInput
                        style={styles.messageInput}
                        value={message}
                        onChangeText={(text) => {setMessageText(text); }}
                        placeholder="メッセージを入力してください"
                        multiline
                    />
                </View>
                <View style={styles.buttonContainer} >
                    <BackButton style={styles.BackButton} />
                    <DecisionButton
                        style={styles.DecisionButton}
                        decisionLabel={"次へ"}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    enter: {
        height: '60%',
        marginTop: 15,
    },
    relationshipContainer: {
        width: "100%",
        paddingHorizontal: 40,
        marginVertical: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    relationshipInput: {
        borderWidth: 1,
        height: 40,
        width: 100,
        marginTop: 10,
    },
    messageContainer:{
        width: '100%',
        paddingHorizontal: 40,
    },
    messageInput: {
        borderWidth: 1,
        width: "100%",
        height: 200,
        marginTop: 10,
        padding: 10,
    },
    buttonContainer:{
        width: "100%",
        marginVertical: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 50,
        paddingRight: 50,
    },
    BackButton: {
    },
    DecisionButton:{
    },
})
