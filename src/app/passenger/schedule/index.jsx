import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import styles from '../../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const PassengerSchedule = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.header_container}>
      <Link href={`/passenger/view/`} asChild>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.link_text}>Back To View Passenger</Text>
        </TouchableOpacity>
      </Link>
    </View>
      <View style={styles.container}>
        <Stack.Screen options={{title: 'Schedule', headerShown: false}}/>
        <Text>PassengerSchedule</Text>
      </View>
    </SafeAreaView>
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