//画面遷移　ヘッダー　タブ　管理
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome} from "@expo/vector-icons"　

import MyFriendListPage from '../screens/MyFriendListPage'  //2-1
import FriendSelectPage from '../screens/FriendSelectPage' //3-1
import EmergencyFriendSelectPage from '../screens/EmergencyFriendSelectPage'; //3-2
import MessageInputPage from '../screens/MessageInputPage' //3-3
import VerificationPage from '../screens/VerificationPage'  //3-4
import MessageListPage from '../screens/MessageListPage'  //4-1
import ConfigurationPage from '../screens/ConfigurationPage'  //5-1


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 


const FriendStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen
        name="私の友達"
        component={MyFriendListPage}
        />
      </Stack.Navigator>
    )
  }

  const SendStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen
        name="誰の緊急事態ですか？"
        component={FriendSelectPage}
        />
        <Stack.Screen
        name="誰に連絡しますか？"
        component={EmergencyFriendSelectPage}
        />
        <Stack.Screen
        name="送信内容を入力して下さい"
        component={MessageInputPage}
        />
        <Stack.Screen
        name="送信内容を確認して下さい"
        component={VerificationPage }
      />
      </Stack.Navigator>
    )
  }

  const ReceiveStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen
        name="受信メッセージ一覧"
        component={MessageListPage}
        />
      </Stack.Navigator>
    )
  }

  const ConfigurationStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen
        name="設定一覧"
        component={ConfigurationPage}
        />
      </Stack.Navigator>
    )
  }



export default AppNavigator = () => {
    return (
      <NavigationContainer>
          <Tab.Navigator screenOptions={screenOption}>
            <Tab.Screen name="友達" component={FriendStack} options={{headerShown: false}}/>
            <Tab.Screen name="送信" component={SendStack} options={{headerShown: false}}/>
            <Tab.Screen name="受信" component={ReceiveStack} options={{headerShown: false}}/>
            <Tab.Screen name="設定" component={ConfigurationStack} options={{headerShown: false}}/>

          </Tab.Navigator>
      </NavigationContainer>
    );
  }




const screenOption = ({route}) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === '友達') {
      iconName = "users";
    } else if (route.name === '送信') {
      iconName = "cloud-upload";
    }else if (route.name === '受信') {
      iconName = "cloud-download";
    }else if (route.name === '設定') {
      iconName = "cogs";
    }


    return <FontAwesome name={iconName} size={size} color={color} />;
  },
})

