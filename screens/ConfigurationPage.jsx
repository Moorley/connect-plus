//5-1
//設定画面(仮)
//ConfigurationPage

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView, Button, Alert } from 'react-native';



const ConfigurationPage =() => {


  return (

  <View style={styles.container}>
        <Text>設定画面(仮)</Text>
  </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",

  },
});

export default ConfigurationPage;

