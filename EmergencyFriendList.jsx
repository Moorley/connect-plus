import React from 'react';
import { View, StyleSheet, } from "react-native";
import FriendList from './components/FriendList';
import Footer from './components/Footer';
import Header from './components/Header';

export default function EmergencyFriendList() {
  return (
    <View style={styles.appContainer}>
      <Header style={styles.Header}/>
      <FriendList style={styles.friendList}/>
      <Footer style={styles.Footer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },

  Header: {
  },

  Footer: {
  },
});

