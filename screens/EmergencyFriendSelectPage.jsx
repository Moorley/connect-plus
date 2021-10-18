//3-2
//送信先の選択
//EmergencyFriendSelectPage

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView, Button, Alert } from 'react-native';
import ScreenTransition_1 from '../components/ScreenTransition_1';



const EmergencyFriendSelectPage =({navigation}) => {
  return (

  <View style={styles.container}>
        <Text>EmergencyFriendSelectPageだよー</Text>
        <ScreenTransition_1
      onPress={() => navigation.navigate("送信内容を入力して下さい")}
      />
        
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

export default EmergencyFriendSelectPage;

