import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, FlatList} from 'react-native';
import { ListItem, } from 'react-native-elements';
import UserNameListItem from '../UserNameListItem';
import user from '../../Dummyjson/user.json'  //dymmu

/*
itemsの中身をpropsで受け取れるように修正
ListItemの部分をpropsで受け取れるように修正
*/

const List =(props) => {
/* ページで固有の譲歩を持つことでListのデザインとして共通化する
 const items = user.map((users,index) => {
    return(   
        <UserNameListItem 
        user={users.username}
        key={index}/>   //メモ　user props を指定する

    )});
*/
    return(
        <View>
          <FlatList
           data={props.ListItem}  //表示してあげたいデータを入れる
           renderItem={({ item }) => <UserNameListItem
           user={item.username}/>}
           keyExtractor={(item, index) => index.toString()}
          
          />
          
      </View>
      
    )
}


    export default List;

    //スクロール機能　はFlatListを用いている

    // paddingBottom:100,