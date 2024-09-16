// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   View,
//   ImageBackground,
//   Image,
//   Button,
//   Text,
// } from "react-native";
// import * as React from "react";
// import {
//   ClerkProvider,
//   ClerkLoaded,
//   useAuth,
//   SignedIn,
//   SignedOut,
//   Link,
//   useUser,
// } from "@clerk/clerk-expo";

// // Render the home page
// const image = require("../assets/cache.webp");
// export default function HomeRoute() {
//   const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
//   if (!publishableKey) {
//     throw new Error(
//       "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
//     );
//   }
//   const { userId } = useAuth();
//   const { user } = useUser();
//   console.log(userId);
//   return (
//     <ImageBackground
//       source={image}
//       resizeMode="contain"
//       style={styles.image}
//       backgroundColor={"black"}
//     >
//       <View style={styles.container}>
//         <StatusBar barStyle="dark-content" backgroundColor="black" />
//         <Image
//           style={styles.tinyLogo}
//           source={{
//             uri: "https://static.wixstatic.com/media/de49ba_6b0e5f6b8af64dac9b81d7f809833d98~mv2.png/v1/fill/w_210,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/de49ba_6b0e5f6b8af64dac9b81d7f809833d98~mv2.png",
//           }}
//         />
//         <Text style={styles.text}>Welcome to Cache42</Text>
//       </View>
//       <Button
//         styles={styles.button}
//         // onPress={onPressLearnMore}
//         title="Book Now"
//         color="red"
//         accessibilityLabel="Learn more about this purple button"
//       />
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//   },
//   image: {
//     zIndex: 0,
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//   },
//   bottomNavigation: {
//     zIndex: 1,
//   },
//   tinyLogo: {
//     width: 100,
//     height: 100,
//     alignSelf: "center",
//     top: 90,
//   },
//   text: {
//     color: "white",
//     fontSize: 35,
//     top: 85,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginTop: 20,
//   },
//   button: {
//     borderRadius: 10,
//   },
// });

import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, TextInput, Button, View } from "react-native";
import React from "react";

export default function SignInRoute() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Email..."
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
      />
      <TextInput
        value={password}
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button title="Sign In" onPress={onSignInPress} />
      <View>
        <Text>Don't have an account?</Text>
        <Link href="/sign-up">
          <Text>Sign up</Text>
        </Link>
      </View>
    </View>
  );
}
