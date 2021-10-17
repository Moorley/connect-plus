//3-2
//送信先の選択
//EmergencyFriendSelectPage

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView, Button, Alert } from 'react-native';



const EmergencyFriendSelectPage =() => {


  return (

  <View style={styles.container}>
        <Text>EmergencyFriendSelectPageだよー</Text>
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

export default EmergencyFriendSelectPage;

