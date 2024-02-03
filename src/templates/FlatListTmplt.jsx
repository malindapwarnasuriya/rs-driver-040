import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import FlatListItemTmplt from '../components/data/FlatListItemTmplt';

const FlatListTmplt = () => {
  const data = [...Array(30)].map((val, index)=>(index+1));

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.list_container}
        columnWrapperStyle={styles.item_column}
        data={data}
        renderItem={({item})=><FlatListItemTmplt item={item}/>}
      />
    </View>
  );
}

export default FlatListTmplt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    gap: 10,
  },
  list_container: {
    gap: 10,
    padding: 10,
  },  
  item_column: {
    gap: 10,
  },
})