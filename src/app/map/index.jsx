import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React, { useRef, useState } from 'react';
import { Link, Stack } from 'expo-router';
import styles from '../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { LocationPermission } from '../../providers/LocationPermission';
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

const Map = () => {
  const mapRef = useRef();
  const [userLocation, setUserLocation] = useState();

  const locationChanged = (event) => {
    if(userLocation) {
      if(event.nativeEvent.coordinate.latitude!==userLocation.latitude && event.nativeEvent.coordinate.longitude!==userLocation.longitude){
        setUserLocation(event.nativeEvent.coordinate);
        mapRef.current.animateToRegion({
          latitude: event.nativeEvent.coordinate.latitude,
          longitude: event.nativeEvent.coordinate.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
      }
    }
    else{
      setUserLocation(event.nativeEvent.coordinate);
      mapRef.current.animateToRegion({
        latitude: event.nativeEvent.coordinate.latitude,
        longitude: event.nativeEvent.coordinate.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Screen options={{title: 'Passenger List'}}/>
      <LocationPermission/>
      <View style={localStyles.container}>
        <View style={localStyles.header_container}>
          
        </View>
        <MapView 
          style={localStyles.map}
          provider={PROVIDER_GOOGLE}
          ref={mapRef}
          showsUserLocation={true}
          onUserLocationChange={locationChanged}
          showsMyLocationButton={true}
          initialRegion={{
            latitude: userLocation?userLocation.latitude:7.2918,
            longitude: userLocation?userLocation.longitude:80.6338,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          mapPadding={{top:50, right:0, left:0, bottom:0}}
        >

        </MapView>
      </View>
    </SafeAreaView>
  );
}

export default Map;

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    position: 'relative'
  },
  map: {
    width: '100%',
    flex: 1,
    marginTop: -10,
    zIndex: 50,
  },
  header_container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: 100,
  },
  view_container: {
    position: 'absolute',
    top: 70,
    left: '2.5%',
    backgroundColor: '#fff',
    width: '95%',
    height: 60,
    borderRadius: 5,
    zIndex: 100,
  },
});