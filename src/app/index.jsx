import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';
import { Link, Stack } from 'expo-router';


export default function Home() {
  return (
    <View style={styles.full_container}>
      <Stack.Screen options={{title: 'Home'}}/>
      <View style={styles.container}>
        <Link href={'/signin'} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.link_text}>Sign In</Text>
          </TouchableOpacity>
        </Link>
        <Link href={'/signup'} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.link_text}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
        <Link href={'/reset'} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.link_text}>Reset</Text>
          </TouchableOpacity>
        </Link>
        <Link href={'/passenger'} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.link_text}>Passengers</Text>
          </TouchableOpacity>
        </Link>
        <Link href={'/landing/firstPage'} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.link_text}>Landing</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
