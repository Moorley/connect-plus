import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FooterButton from './src/componets/FooterButtton';
import EmergencyFriendList from './src/screens/EmergencyFriendList';

export default function App() {
  return (
    <EmergencyFriendList />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
