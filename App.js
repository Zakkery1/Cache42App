import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MenuRoute from "./Routes/Menu";
import LocationsRoute from "./Routes/Location";

const image = require("./assets/cache.webp");
const HomeRoute = () => (
  <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://static.wixstatic.com/media/de49ba_6b0e5f6b8af64dac9b81d7f809833d98~mv2.png/v1/fill/w_210,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/de49ba_6b0e5f6b8af64dac9b81d7f809833d98~mv2.png",
        }}
      />
      <Text style={styles.text}>Welcome to Cache42</Text>
    </View>
  </ImageBackground>
);

const MenuR = () => <MenuRoute />;

const LocationsR = () => (
  // <ImageBackground source={image} resizeMode="cover" style={styles.image}>
  //   <View style={styles.container}>
  //     <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
  //     <Image
  //       style={styles.tinyLogo}
  //       source={{
  //         uri: "https://static.wixstatic.com/media/de49ba_6b0e5f6b8af64dac9b81d7f809833d98~mv2.png/v1/fill/w_210,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/de49ba_6b0e5f6b8af64dac9b81d7f809833d98~mv2.png",
  //       }}
  //     />
  //     <Text style={styles.text}>Welcome to Cache42</Text>
  //   </View>
  // </ImageBackground>
  <LocationsRoute />
);

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    { key: "menu", title: "Menu", focusedIcon: "book-open-page-variant" },
    { key: "location", title: "Locations", focusedIcon: "history" },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    menu: MenuR,
    location: LocationsR,
  });

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <BottomNavigation
          style={styles.bottomNavigation}
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          barStyle={{ backgroundColor: "rgba(2, 2, 2, 0.8)" }}
          theme={{ colors: { secondaryContainer: "white" } }}
        />
      </View>
    </SafeAreaProvider>
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
    width: 50,
    height: 50,
    alignSelf: "center",
    top: 80,
  },
  text: {
    color: "white",
    fontSize: 35,
    top: 85,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
