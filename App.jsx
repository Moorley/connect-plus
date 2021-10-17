
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView, Button, Alert } from 'react-native';
import EmergencyFriendList from './screens/FriendSelectPage';
import EnterMessage from './screens/MessageInputPage';
import FriendList from './screens/MyFriendListPage';
import MessageTransmissionConfirmation from './screens/VerificationPage';




export default function App() {
  return (
    <MessageTransmissionConfirmation/>
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

//画面遷移実装