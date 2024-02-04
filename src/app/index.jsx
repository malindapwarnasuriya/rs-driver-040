import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';
import { Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1}}>
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
        <Link href={'/landing'} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.link_text}>Landing</Text>
          </TouchableOpacity>
        </Link>
        <Link href={'/map'} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.link_text}>Map</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
