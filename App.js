import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Merriweather_700Bold, Merriweather_400Regular, Merriweather_400Regular_Italic, Merriweather_700Bold_Italic } from '@expo-google-fonts/merriweather';
import { Inter_900Black } from '@expo-google-fonts/inter';
import FlatListTmplt from './src/templates/FlatListTmplt';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Merriweather: Merriweather_400Regular,
    MerriweatherItalic: Merriweather_400Regular_Italic,
    MerriweatherBold: Merriweather_700Bold,
    MerriweatherBoldItalic: Merriweather_700Bold_Italic,
  });

  useEffect(() => {
    if(fontsLoaded || fontError){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if(!fontsLoaded && !fontError){
    return null;
  };


  return (
    <View style={styles.container}>
      <FlatListTmplt/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
