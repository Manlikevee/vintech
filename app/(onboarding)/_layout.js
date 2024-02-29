import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Stack } from "expo-router";
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function Layout() {


  return (
    <Stack >
          <Stack.Screen name="index" options={{ headerShown: false }} />
       <Stack.Screen name="home" options={{ headerShown: false }} />
       <Stack.Screen name="about" options={{ headerShown: false }} />
    </Stack>

  );
}
