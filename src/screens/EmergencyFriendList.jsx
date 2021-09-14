import label from "prop-types";
import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import FooterButton from '../componets/FooterButtton';

export default function EmergencyFriendList() {
    return (
        <View style= {styles.container}>
            <View style={styles.name}>
                <Text> 山見駿介</Text>
                <Text> 山見駿介</Text>
                <Text> 山見駿介</Text>
                <Text> 山見駿介</Text>
                <Text> 山見駿介</Text>
                <Text> 山見駿介</Text>
            </View>
            <FooterButton label="私の友達" />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    name: {
        flex: 1,
        paddingHorizontal: 27,
        paddingVertical: 32,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
})
