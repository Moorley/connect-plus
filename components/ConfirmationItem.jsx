import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, Alert, } from 'react-native';
import Confirmation from '../Dummyjson/Confirmation.json' //dummy
import List from './UserNameList';

/*
送信内容確認画面の中身
*/

const ConfirmationItem = () => {

    return (
        <View style={styles.confirmationContainer}>
            <Text style={styles.confirmationtxtContainer} >[緊急事態者]</Text>
            <View style={styles.confirmationAnsContainer1}>
            {Confirmation.map((Confirmations)=>(
                <Text style={styles.confirmationAnstxtContainer1}>{Confirmations.user01.username}</Text>
            ))}
            </View>

            <Text style={styles.confirmationtxtContainer} >[緊急事態者との関係性]</Text>
            <View style={styles.confirmationAnsContainer1}>
            {Confirmation.map((Confirmations)=>(
                <Text style={styles.confirmationAnstxtContainer1}>{Confirmations.user01.relationship}</Text>
            ))}
            </View>

            <Text style={styles.confirmationtxtContainer} >[送信メッセージ内容]</Text>
            <View style={styles.confirmationAnsContainer2}>
            {Confirmation.map((Confirmations)=>(
                <Text style={styles.confirmationAnstxtContainer2}>{Confirmations.user01.message}</Text>
            ))} 
            </View>

            <Text style={styles.confirmationtxtContainer} >[メッセージ送信先]</Text>
            <View style={styles.confirmationAnsContainer2}>
            {Confirmation.map((Confirmations)=>(
                <Text style={styles.confirmationAnstxtContainer2}>{Confirmations.user01.send}</Text>
            ))}    
            </View>
 


        </View>

    )}





const styles = StyleSheet.create({
    
    confirmationContainer: {
        width: "100%",
        height: "68%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        
    },

    confirmationAnsContainer1:{
        width: "65%",
        height: "7%",
        backgroundColor: "#fff",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom:"3%",  
 
    },

    confirmationAnsContainer2:{
        width: "95%",
        height: "29%",
        backgroundColor: "#fff",
        borderWidth: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginBottom:"3%",  
 
    },

    
    confirmationtxtContainer:{
        fontSize:25,
        fontWeight:"500"
    },
    confirmationAnstxtContainer1:{
        fontSize:25,
        fontWeight:"400"
    },
    confirmationAnstxtContainer2:{
        fontSize:18,
        fontWeight:"400"
    },

    


});


export default ConfirmationItem;
