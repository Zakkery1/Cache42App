import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const INITIAL_REGION = {
  latitude: 35.14764931924913,
  longitude: -90.05199365830482,
  latitudeDelta: 2,
  longitudeDelta: 2,
};
const windowWidth = Dimensions.get("window").width;

export default function LocationsRoute() {
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: windowWidth,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
