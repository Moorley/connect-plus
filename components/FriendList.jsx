import React, {useState} from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity, ScrollView} from "react-native";


const ARRAY = [
    {
        id: "1",
        title: '山見',
    },
    {
        id: "2",
        title: '芥川',
    },
    {
        id: "3",
        title: '青木',
    },
    {
        id: "4",
        title: '森',
    },
    {
        id: "5",
        title: 'メバル'
    },
    {
        id: "6",
        title: 'メバル'
    },
    {
        id: "7",
        title: 'メバル'
    },
    {
        id: "8",
        title: 'メバル'
    },

]

export default function FriendList(){
    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]} >
            <Text style={[styles.title, textColor]}>{item.title}</Text>
        </TouchableOpacity>
    )
    const [selectedId, setSelectedId] = useState(null);
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "blue" : "#EEEEEE";
        const color = item.id === selectedId ? '#FFFFFF' : 'black';
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor = {{ backgroundColor }}
                textColor={ { color } }
            />
        );
    };

    return (
        <View style={styles.friendListContainer}>
            <FlatList
                data={ARRAY}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    friendListContainer: {
        width: '100%',
        height: '70%',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 12,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
    }
})
