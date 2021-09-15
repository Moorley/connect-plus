import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FooterButton from './src/componets/FooterButtton';
import EmergencyFriendList from './src/screens/EmergencyFriendList';
import FriendList from './src/componets/FriendList';
import Footer from './src/componets/Footer';
import Header from './src/componets/Header';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Header style={styles.Header}/>
      <FriendList style={styles.FriendList} />
      <Footer style={styles.Footer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },

  Header: {
    flex: 1,
  },

  FriendList: {
    flex: 2,
  },

  Footer: {
    flex: 3,
  },
});
