import { Text, View, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import styles from '../../../styles/styles';

const PassengerView = () => {
  return (
    <View style={styles.full_container}>
      <Stack.Screen options={{title: 'View Passenger'}}/>
      <View style={styles.header_container}>
        <Link href={'/passenger'} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.link_text}>Back To Passengers</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.container}>
        <Text>PassengerView</Text>
        <Link href={'/passenger/schedule'} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.link_text}>Schedule</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
};

export default PassengerView;