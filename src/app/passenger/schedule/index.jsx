import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import styles from '../../../styles/styles';

const PassengerSchedule = () => {
  return (
    <View style={localStyles.container}>
      <Stack.Screen options={{title: 'Schedule', headerShown: false}}/>
      <Text>PassengerSchedule</Text>
    </View>
  );
}

export default PassengerSchedule;

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});