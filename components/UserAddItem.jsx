import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView, Button, Alert } from 'react-native';


const UserAddItem =() => {
    return(

<View style={styles.userAddContainer}>

      <Button 
    title="友達追加"
    onPress={() => Alert.alert('友達追加がタップされました')}
    color="#fff"
        >
 
        </Button>
</View>

    )
}


const styles = StyleSheet.create({
  
    userAddContainer:{
        backgroundColor:"#007AFF",
        width: "90%",
        height: "8%",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginBottom:"10%",  
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
     
      },
  

    });

  
    
    
    export default UserAddItem;



    //ゴミ
    // <Text style={styles.userAddtxt}>{props.buttonname}</Text>

    // #4169e1


  