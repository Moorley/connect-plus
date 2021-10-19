//3-1
//緊急事態の友達選択
//FriendSelectPage
//

import React from 'react';
import { View, StyleSheet, } from "react-native";
import FriendList from '../components/FriendList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScreenTransition_1 from '../components/ScreenTransition_1';

const FriendSelectPage =({navigation}) => {
  return (
    <View style={styles.appContainer}>
      <Header style={styles.Header} title="誰の緊急連絡ですか？"/>
      <FriendList/>
      <Footer style={styles.Footer}/>
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
