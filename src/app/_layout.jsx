import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useFonts, Merriweather_700Bold, Merriweather_400Regular, Merriweather_400Regular_Italic, Merriweather_700Bold_Italic } from '@expo-google-fonts/merriweather';
import { Inter_900Black } from '@expo-google-fonts/inter';
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
    <Stack initialRouteName='Home' screenOptions={{headerShown: true}}></Stack>
  );
}

export default RootLayout;