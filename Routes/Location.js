import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";

const INITIAL_REGION = {
  latitude: 35.14764931924913,
  longitude: -90.05199365830482,
  latitudeDelta: 1,
  longitudeDelta: 1,
};
const windowWidth = Dimensions.get("window").width;

export default function LocationsRoute() {
  return (
    <View style={styles.container}>
      <MapView
        minZoomLevel={15}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        scrollEnabled={false}
      >
        <Marker
          coordinate={{
            latitude: 35.14764931924913,
            longitude: -90.05199365830482,
          }}
          title={"Cache42"}
          description={"Restaurant"}
        />
      </MapView>
      <View style={styles.hoursContainer}>
        <Text style={styles.openingHours}>
          Opening Hours Monday{"\n"}
          {"\n"}
          <Text style={styles.hoursText}>
            Monday - Thursday: 4pm - 11pm {"\n"}
            Friday & Saturday: 4pm - 1am {"\n"}
            Sunday Closed
          </Text>
        </Text>
        <Text style={styles.openingHours}>
          Contact Us{"\n"}
          {"\n"}
          <Text style={styles.hoursText}>
            901-249-7594{"\n"}
            4202 Hacks Cross Rd, Memphis TN 38125 Cache42Mem@gmail.com
          </Text>
        </Text>
      </View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://static.wixstatic.com/media/de49ba_6b0e5f6b8af64dac9b81d7f809833d98~mv2.png/v1/fill/w_210,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/de49ba_6b0e5f6b8af64dac9b81d7f809833d98~mv2.png",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  map: {
    height: 400,
    width: windowWidth,
  },
  openingHours: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    color: "white",
  },
  hoursContainer: {
    padding: 10,
    backgroundColor: "black",
    alignItems: "center",
  },
  hoursText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  tinyLogo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    top: 90,
  },
});
