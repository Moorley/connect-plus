import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView, Button, Alert } from 'react-native';


const TitleItem =(props) => {
    return(
  <View style={styles.TitleContainer}>
      <Text style={styles.Title}> {props.title}</Text>
  </View>

    )
}


const styles = StyleSheet.create({
  
  TitleContainer:{
    backgroundColor:"#fff",
    width:"100%",
    height:"10%",
    alignItems: "center",
    justifyContent: "center",
    },
    
    Title:{
      fontSize:40,
      fontWeight:"700"
    },
  
  });
  
  
  export default TitleItem;