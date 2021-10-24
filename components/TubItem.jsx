import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView, Button, Alert } from 'react-native';



const TubItem =() => {
    return(

<View style={styles.tubContainer}></View>
    )
}


const styles = StyleSheet.create({
  
    tubContainer:{
        width:"100%",
        height: "12%",
        backgroundColor:"#fff",
        borderWidth: 1,
        },
    
    
    });
    
    
    export default TubItem;