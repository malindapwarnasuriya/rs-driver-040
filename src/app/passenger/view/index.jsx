import { Text, View, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import styles from '../../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const PassengerView = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
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
        <Link href={'/passenger/edit'} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.link_text}>Edit Passenger</Text>
          </TouchableOpacity>
        </Link>
        <Link href={'/passenger/schedule'} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.link_text}>Schedule</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  )
};

export default PassengerView;