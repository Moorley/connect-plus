import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView, Button, Alert } from 'react-native';
import TitleItem from './components/TitleItem';
import UserItem from './components/UserItem';
import UserAddItem from './components/UserAddItem';
import TubItem from './components/TubItem';



export default function App() {
  return (

  <SafeAreaView style={styles.container}>
    <TitleItem title="私の友達"/>
    <UserItem />
    <UserAddItem />
    <TubItem/>
  </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});


