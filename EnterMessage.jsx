import React from 'react' ;
import { View, StyleSheet, Text } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Enter from './components/Enter';

export default function EnterMessage() {
    return(
        <View style={styles.appContainer}>
            <Header title="メッセージの入力"/>
            <Enter />
            <Footer />
        </View>
    )
}


const styles = StyleSheet.create({
    appContainer: {
        flex:1,
    }
});
