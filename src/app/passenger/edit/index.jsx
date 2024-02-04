import { Text, View, TouchableOpacity, Button, ScrollView } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import styles from '../../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const PassengerEdit = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Screen options={{title: 'Edit Passenger'}}/>
      <View style={styles.header_container}>
        <Link href={`/passenger/view/`} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.link_text}>Back To View Passenger</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <ScrollView style={{width: '100%'}} contentInsetAdjustmentBehavior='automatic'>
        <View style={[styles.container, {backgroundColor: '#fff'}]}>
          <Text style={{height: 200}}>PassengerEdit</Text>
          <Text style={{height: 200}}>PassengerEdit</Text>
          <Text style={{height: 200}}>PassengerEdit</Text>
          <Text style={{height: 200}}>PassengerEdit</Text>
          <Text style={{height: 200}}>PassengerEdit</Text>
          <Text style={{height: 200}}>PassengerEdit</Text>
          <Text style={{height: 200}}>PassengerEdit</Text>
          <Text style={{height: 200}}>PassengerEdit</Text>
          <Text style={{height: 200}}>PassengerEdit</Text>
          <Text style={{height: 200}}>PassengerEdit</Text>
          <Text style={{height: 200}}>PassengerEdit</Text>
          <Text style={{height: 200}}>PassengerEdit</Text>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default PassengerEdit;