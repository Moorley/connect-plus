import React from  'react';
import { Input } from 'react-native-elements';
/*
if文で分けるところ他に賢いやり方ありそう
disabledで入力できるやつか表示のみのやつか判別可能
確認ページでもこれを呼び出して修正
*/


export default function TextInput() {

    if(props.size === 'Big'){
        return(
            <Input
            placeholder={props.placeholder}
            label={props.label}
            style={styles.Big}
            disabled={props.disabled}>
            </Input>
        )
    }else{
        return(
            <Input
            placeholder={props.placeholder}
            label={props.label}
            disabled={props.disabled}>
            </Input>
        )
    }
}

    const styles = StyleSheet.create({
  
        Big:{
            height: 200,
            },
        
        
        });

