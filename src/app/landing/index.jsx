import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Stack, router } from 'expo-router';
import { FontAwesome5, Octicons } from '@expo/vector-icons';
import { GestureDetector, Gesture, Directions  } from 'react-native-gesture-handler';
import Animated, { FadeIn, FadeOut, SlideInLeft, SlideOutLeft, SlideOutRight} from 'react-native-reanimated';

const steps = [
  {
    index: 0,
    icon: 'dollar-sign',
    title: 'Save Money On Travel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget lacinia justo.',
  },
  {
    index: 1,
    icon: 'car-alt',
    title: 'Shedule All Your Travels',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget lacinia justo. Aliquam venenatis, massa vitae viverra tempus, ipsum lacus tristique mi, a vestibulum erat nibh sit amet mauris.',
  },
  {
    index: 2,
    icon: 'smile',
    title: 'Be Safe All The Time',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget lacinia justo. Aliquam venenatis, massa vitae viverra tempus, ipsum lacus tristique mi, a vestibulum erat nibh sit amet mauris. Aenean non quam porta, pharetra orci non, commodo lacus. Donec dapibus metus at dui mattis, a laoreet risus facilisis.',
  },
];

const Landing = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(steps[index]);

  const fling = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd((e)=>{}), 
    Gesture.Fling().direction(Directions.RIGHT).onEnd((e)=>{})
  );

  const onSkip = () => {
    setIndex(0);
    router.navigate('/');
  };
  const onForward = () => {
    if(index<(steps.length-1)){
      setIndex(index+1);
    }
    else{
      setIndex(0);
      router.navigate('/');
    }
  };
  const onBack = () => {
    if(index===0){
      router.navigate('/');
    }
    else{
      setIndex(index+1);
    }
  };

  useEffect(() => {
    setData(steps[index]);
  }, [index]);
  

  return (
    <SafeAreaView style={localStyles.container}>
      <Stack.Screen options={{headerShown: false}}/>
      <GestureDetector gesture={fling} >
        <View style={localStyles.content} key={index}>
          <Animated.View style={localStyles.image_container} entering={FadeIn.delay(300)} exiting={FadeOut}>
            <FontAwesome5 name={data.icon} size={100} color="#cef202" />
          </Animated.View>
          <Animated.Text style={localStyles.title} entering={SlideInLeft} exiting={SlideOutRight}>{data.title}</Animated.Text>
          <Animated.Text style={localStyles.description} entering={SlideInLeft.delay(200)} exiting={SlideOutRight}>{data.description}</Animated.Text>
        </View>
      </GestureDetector>
      <View style={localStyles.progress}>
        {steps.map(val=>
          <Octicons key={val.index} onPress={()=>setIndex(val.index)} name='dot-fill' size={30} color={index===val.index?'#cef202':'#302e38'} />
        )}
      </View>
      <View style={localStyles.footer}>
        <TouchableOpacity style={localStyles.button_2} onPress={onSkip}>
          <Text style={localStyles.button_2_text}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.button} onPress={onForward}>
          <Text style={localStyles.button_text}>Continue</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

export default Landing;

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#15141A',
  },
  content: {
    width: '100%',
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {

  },
  image_container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'MerriweatherItalic',
    color: '#fdfdfd',
    letterSpacing: 1.3,
    fontSize: 30,
    marginVertical: 30,
  },
  description: {
    fontFamily: 'Merriweather',
    color: '#fdfdfd',
    letterSpacing: 1.3,
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    height: 200,
  },
  footer: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  progress: {
    height: 40,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: '#302e38',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    width: 160,
  },
  button_text: {
    color: '#fdfdfd',
    fontFamily: 'Inter',
    fontSize: 16,
  },
  button_2: {
    padding: 15,
    alignItems: 'center',
  },
  button_2_text: {
    color: '#fdfdfd',
    fontFamily: 'Inter',
    fontSize: 16,
  },
});