import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Alert } from 'react-native';
import { Button } from 'react-native-elements';

/*
入力完了次へ進むボタン
ボタンタイトルをpropsで受け取れるようにする
Onclickをページで指定することで各種処理を実装
デザインの共通化を図る
*/

const ConfirmButton = (props) => {
    return (

            <View >
                <Button
                    title={props.ButtonTitle}
                    onPress={props.onPress}
                    color="black"
                >
                </Button>
            </View>

    )
}


export default ConfirmButton;