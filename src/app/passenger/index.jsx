import { FlatList, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import ListItemTmplt from './segments/ListItemTmplt';
import { Link, Stack } from 'expo-router';
import styles from '../../styles/styles';

const PassengerList = () => {
  const data = [...Array(30)].map((val, index)=>(index+1));

  return (
    <View style={styles.full_container}>
      <Stack.Screen options={{title: 'Passenger List'}}/>
      <View style={styles.header_container}>
        <Link href={'/'} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.link_text}>Home</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          contentContainerStyle={localStyles.list_container}
          columnWrapperStyle={localStyles.list_item_column}
          data={data}
          renderItem={({item})=><ListItemTmplt item={item}/>}
        />
      </View>
    </View>
  );
}

export default PassengerList;

const localStyles = StyleSheet.create({
  list_container: {
    gap: 10,
    padding: 10,
  },  
  list_item_column: {
    gap: 10,
  },
});