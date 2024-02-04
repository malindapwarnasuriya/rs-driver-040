import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { GestureHandlerRootView  } from 'react-native-gesture-handler';
import { useFonts, Merriweather_700Bold, Merriweather_400Regular, Merriweather_400Regular_Italic, Merriweather_700Bold_Italic } from '@expo-google-fonts/merriweather';
import { Inter_900Black } from '@expo-google-fonts/inter';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
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
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack initialRouteName='Home' screenOptions={{headerShown: false}}></Stack>
      </GestureHandlerRootView >
    </SafeAreaProvider >
  );
}

export default RootLayout;