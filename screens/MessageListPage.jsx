//4-1
//受信したメッセージ一覧
//MessageListPage

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView, Button, Alert } from 'react-native';



const essageListPage =() => {


  return (

  <View style={styles.container}>
        <Text>essageListPageだよー</Text>
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

export default essageListPage;

