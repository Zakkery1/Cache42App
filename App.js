import { StyleSheet, View } from "react-native";
import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MenuRoute from "./Routes/Menu";
import LocationsRoute from "./Routes/Location";
import HomeRoute from "./Routes/Home";
// import LoginRoute from "./Routes/Login";
import SignInRoute from "./App/auth/sign-in";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
// import { Slot } from "expo-router";

const image = require("./assets/cache.webp");
const LoginR = () => <SignInRoute />;

const HomeR = () => <HomeRoute />;

const MenuR = () => <MenuRoute />;

const LocationsR = () => <LocationsRoute />;

export default function App() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
    },
    { key: "menu", title: "Menu", focusedIcon: "book-open-page-variant" },
    { key: "location", title: "Locations", focusedIcon: "map" },
    { key: "login", title: "logins", focusedIcon: "map" },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    // login: LoginR,
    home: HomeR,
    menu: MenuR,
    location: LocationsR,
  });

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>
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
      </ClerkLoaded>
    </ClerkProvider>
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
    // height: 200,
    // width: Dimensions.get("window").width,
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
});
