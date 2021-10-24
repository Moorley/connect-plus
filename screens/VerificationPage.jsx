//3-4
//メッセージ送信確認画面
//VerificationPage

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, Alert } from 'react-native';
import TitleItem from '../components/TitleItem';
import TubItem from '../components/TubItem';
import ConfirmationItem from '../components/ConfirmationItem';
/*
import SelectionItem from '../components/SelectionItem';
*/
import ConfirmButton from '../components/commonComponents/ConfirmButton';

const VerificationPage =() => {

    return (

        <SafeAreaView style={styles.container}>
          <TitleItem title="送信内容を確認後「送信」をタップしてください" />
          <ConfirmationItem/>
          <ConfirmButton />
          <TubItem />
        </SafeAreaView >
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

export default VerificationPage;

//M_20210925