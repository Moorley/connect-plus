//2-1
//私の友達一覧画面
//MyFriendListPage

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView, Button, Alert } from 'react-native';
import TitleItem from '../components/TitleItem';
//import UserItem from '../components/UserItem';
import UserAddItem from '../components/未使用/UserAddItem';
import TubItem from '../components/TubItem';
import UserNameList from '../components/UserNameList';
import user from '../Dummyjson/user.json'  //dymmu
import ConfirmButton from '../components/commonComponents/ConfirmButton';

/*
ページで固有の情報を持つことで書くコンポーネントの抽象度を上げる
*/

const ARRAY = [
  {
    "username": "青木"
  },
  {
    "username": "芥川"
  },
  {
    "username": "山見"
  },
  {
    "username": "森"
  },
  {
    "username": "user5"
  },
  {
    "username": "user6"
  },
]

const MyFriendListPage =() => {
  //const items = JSON.parse(user);
  return (

  <View style={styles.container}>
    <TitleItem title="私の友達"/>
    <UserNameList　ListItem = {ARRAY} />
    <ConfirmButton 
      ButtonTitle ='友達追加' 
      onPress = {() => Alert.alert('友達追加がタップされました')}
    />
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