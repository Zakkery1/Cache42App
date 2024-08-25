import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MenuRoute from "./Routes/Menu";

const image = require("./assets/1000_F_324727233_GwGkDp3eOeEIETimy5wbSp2983GLrkwy.jpg");
const CartRoute = () => (
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

const NotificationsRoute = () => (
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

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "cart",
      title: "Cart",
      focusedIcon: "cart",
      unfocusedIcon: "cart-outline",
    },
    { key: "menu", title: "Menu", focusedIcon: "book-open-page-variant" },
    { key: "location", title: "Locations", focusedIcon: "history" },
    {
      key: "notifications",
      title: "Notifications",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    cart: CartRoute,
    menu: MenuR,
    location: LocationsR,
    notifications: NotificationsRoute,
  });

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <BottomNavigation
          style={styles.bottomNavigation}
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
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
    top: 50,
  },
  text: {
    color: "white",
    fontSize: 20,
    top: 70,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
