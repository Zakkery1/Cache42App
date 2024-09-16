// import { useSignIn } from "@clerk/clerk-expo";
// import { Link, useRouter } from "expo-router";
// import { Text, TextInput, Button, View } from "react-native";
// import React from "react";

// export default function SignInRoute() {
//   const { signIn, setActive, isLoaded } = useSignIn();
//   const router = useRouter();

//   const [emailAddress, setEmailAddress] = React.useState("");
//   const [password, setPassword] = React.useState("");

//   const onSignInPress = React.useCallback(async () => {
//     if (!isLoaded) {
//       return;
//     }

//     try {
//       const signInAttempt = await signIn.create({
//         identifier: emailAddress,
//         password,
//       });

//       if (signInAttempt.status === "complete") {
//         await setActive({ session: signInAttempt.createdSessionId });
//         router.replace("/");
//       } else {
//         // See https://clerk.com/docs/custom-flows/error-handling
//         // for more info on error handling
//         console.error(JSON.stringify(signInAttempt, null, 2));
//       }
//     } catch (err) {
//       console.error(JSON.stringify(err, null, 2));
//     }
//   }, [isLoaded, emailAddress, password]);

//   return (
//     <View>
//       <TextInput
//         autoCapitalize="none"
//         value={emailAddress}
//         placeholder="Email..."
//         onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
//       />
//       <TextInput
//         value={password}
//         placeholder="Password..."
//         secureTextEntry={true}
//         onChangeText={(password) => setPassword(password)}
//       />
//       <Button title="Sign In" onPress={onSignInPress} />
//       <View>
//         <Text>Don't have an account?</Text>
//         <Link href="/sign-up">
//           <Text>Sign up</Text>
//         </Link>
//       </View>
//     </View>
//   );
// }
import * as SecureStore from "expo-secure-store";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { Slot } from "expo-router";

export default function SignInRoute() {
  const tokenCache = {
    async getToken(key) {
      try {
        const item = await SecureStore.getItemAsync(key);
        if (item) {
          console.log(`${key} was used 🔐 \n`);
        } else {
          console.log("No values stored under key: " + key);
        }
        return item;
      } catch (error) {
        console.error("SecureStore get item error: ", error);
        await SecureStore.deleteItemAsync(key);
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <Slot />
      </ClerkLoaded>
    </ClerkProvider>
  );
}
