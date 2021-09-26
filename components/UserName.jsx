import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView, Button, Alert } from 'react-native';


const UserName =(props) => {
    return(
            <View style={styles.nameContainer} >
             <Text style={styles.username}>{props.user}</Text>
          </View>
 
    )
}

const styles = StyleSheet.create({
  


      nameContainer: {
        height: 60,
        width: "100%",
        backgroundColor: "#EEEEEE",
        alignItems: "center",
        justifyContent: "center",
        marginBottom:"7%",  
         　     
      },
    
      username:{
        fontSize:25,
        color:"#4169e1",
        fontWeight:"700"
      },
    
    });

    export default UserName;