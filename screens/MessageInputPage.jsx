//3-3
//メッセージの入力
//MessageInputPage

import React from 'react' ;
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Enter from '../components/Enter';
import ScreenTransition_1 from '../components/ScreenTransition_1';

const MessageInputPage =({navigation}) =>  {
    return(
        <View style={styles.appContainer}>
            <Header title="メッセージの入力"/>
            <Enter />
            <Footer />
            <ScreenTransition_1
             onPress={() => navigation.navigate("送信内容を確認して下さい")}
      />
        </View>
    )
}


const styles = StyleSheet.create({
    appContainer: {
        flex:1,
    }
});

export default MessageInputPage;