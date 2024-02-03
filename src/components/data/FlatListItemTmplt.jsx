import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlatListItemTmplt = ({item}) => {
  return (
    <View style={styles.item_container}>
      <Text style={styles.item_text}>{item}</Text>
    </View>
  );
}

export default FlatListItemTmplt;

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
    fontSize: 50
  },
});