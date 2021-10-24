import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,FlatList, SafeAreaView, Button, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import user from '../Dummyjson/user.json'  //dymmu
import { Text } from 'react-native-elements';

/*
UserNameListが全リストで共通化する場合必要
現段階のようにList毎に〇〇Listを作成するのであれば上にまとめたほうが良い
*/

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