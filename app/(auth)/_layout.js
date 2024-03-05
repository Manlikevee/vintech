import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Stack } from "expo-router";
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function Authlayout() {


  return (
    <Stack>
   
        <Stack.Screen name="index"  options={{ headerShown: false }} />
       <Stack.Screen name="signup" options={{ headerShown: false }} />
       <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>

  );
}
