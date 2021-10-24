import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Alert } from 'react-native';
import { Button } from 'react-native-elements';

/*
入力完了次へ進むボタン
ボタンタイトルをpropsで受け取れるようにする
画面遷移を適したものにできるようにする
*/

const ConfirmButton = (props) => {
    return (

            <View >
                <Button
                    title={props.ButtonTitle}
                    onPress={() => Alert.alert("タップされました")}
                    color="black"
                >
                </Button>
            </View>

    )
}


export default ConfirmButton;