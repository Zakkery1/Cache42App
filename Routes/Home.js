import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Image, Button } from "react-native";
import * as React from "react";

// Render the home page
const image = require("../assets/cache.webp");
export default function HomeRoute() {
  return (
    <ImageBackground
      source={image}
      resizeMode="contain"
      style={styles.image}
      backgroundColor={"black"}
    >
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="black" />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://static.wixstatic.com/media/de49ba_6b0e5f6b8af64dac9b81d7f809833d98~mv2.png/v1/fill/w_210,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/de49ba_6b0e5f6b8af64dac9b81d7f809833d98~mv2.png",
          }}
        />
        {/* <Text style={styles.text}>Welcome to Cache42</Text> */}
      </View>
      <Button
        styles={styles.button}
        // onPress={onPressLearnMore}
        title="Book Now"
        color="red"
        accessibilityLabel="Learn more about this purple button"
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    zIndex: 0,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  bottomNavigation: {
    zIndex: 1,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    top: 90,
  },
  text: {
    color: "white",
    fontSize: 35,
    top: 85,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    borderRadius: 10,
  },
});
