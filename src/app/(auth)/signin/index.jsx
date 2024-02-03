import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import styles from '../../../styles/styles';

const SignIn = () => {
  return (
    <View style={styles.full_container}>
      <Stack.Screen options={{title: 'Sign In'}}/>
      <View style={styles.header_container}>
        <Link href={'/'} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.link_text}>Home</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.container}>
        <Text>SignIn</Text>
      </View>
    </View>
  );
}

export default SignIn;