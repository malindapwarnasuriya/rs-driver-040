import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const ListItemTmplt = ({item}) => {
  return (
    <Link href={`/passenger/view/`} asChild>
      <TouchableOpacity style={styles.item_container}>
        <Text style={styles.item_text}>{item}</Text>
      </TouchableOpacity>
    </Link>
  );
}

export default ListItemTmplt;

const styles = StyleSheet.create({
  item_container: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#f9ede3', 
    justifyContent: 'center', 
    alignItems: 'center',
    borderColor: '#9b4521',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
  },
  item_text: {
    color: '#9b4521', 
    fontSize: 50,
    fontFamily: 'MerriweatherBoldItalic',
  },
});