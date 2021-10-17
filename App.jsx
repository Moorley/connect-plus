import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView, Button, Alert } from 'react-native';
import EmergencyFriendList from './EmergencyFriendList';
import EnterMessage from './EnterMessage';




export default function App() {
  return (
    <EnterMessage/>
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

