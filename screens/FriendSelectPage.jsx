//3-1
//緊急事態の友達選択
//FriendSelectPage
//

import React from 'react';
import { View, StyleSheet, } from "react-native";
import UserNameList from '../components/UserNameList';
//import Header from '../components/Header';
import ScreenTransition_1 from '../components/ScreenTransition_1';
import Footer from '../components/commonComponents/Footer'
import user from '../Dummyjson/user.json'  //dymmu

const ARRAY = [
  {
    "username": "田中"
  },
  {
    "username": "加藤"
  },
  {
    "username": "佐藤"
  },
  {
    "username": "二郎"
  },
  {
    "username": "user100"
  },
  {
    "username": "user0101"
  },
]

const FriendSelectPage =({navigation}) => {
  //const items = JSON.parse(user);
  return (
    <View style={styles.appContainer}>
      <UserNameList ListItem = {ARRAY}/>
      <ScreenTransition_1
      onPress={() => navigation.navigate("誰に連絡しますか？")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },

  Header: {
      flex: 2,
  },

  Footer: {
      flex: 3,
  },
});


export  default FriendSelectPage;
