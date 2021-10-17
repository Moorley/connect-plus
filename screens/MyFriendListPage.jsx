//2-1
//私の友達一覧画面
//MyFriendListPage

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView, Button, Alert } from 'react-native';
import TitleItem from '../components/TitleItem';
import UserItem from '../components/UserItem';
import UserAddItem from '../components/UserAddItem';
import TubItem from '../components/TubItem';


const MyFriendListPage =() => {


  return (

  <View style={styles.container}>
    <TitleItem title="私の友達"/>
    <UserItem />
    <UserAddItem />
    <TubItem/>
  </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "flex-end",

  },
});

export default MyFriendListPage;

//aoki