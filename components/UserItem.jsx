import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView, Button, Alert } from 'react-native';
import UserName from './UserName';
import user from '../Dummyjson/user.json'  //dymmu

const UserItem =() => {
 const items = user.map((users,index) => {
   return(   
<UserName 
user={users.username}
key={index}

/>   //メモ　user props を指定する

 )});


    return(
        <View style={styles.userContainer}>
          <FlatList
           data={user}  //表示してあげたいデータを入れる
           renderItem={({ item }) => <UserName
           user={item.username}
           
           />}
           keyExtractor={(item, index) => index.toString()}
          
          />
          
      </View>
      
    )
}



const styles = StyleSheet.create({
  
    userContainer: {
        height: "60%",
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom:"10%",  

      },

  
    });

    export default UserItem;

    //スクロール機能　はFlatListを用いている

    // paddingBottom:100,