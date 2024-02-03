import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import styles from '../../../styles/styles';

const Reset = () => {
  return (
    <View style={styles.full_container}>
      <Stack.Screen options={{title: 'Reset'}}/>
      <View style={styles.header_container}>
        <Link href={'/'} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.link_text}>Home</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.container}>
        <Text>Reset</Text>
      </View>
    </View>
  );
}

export default Reset;