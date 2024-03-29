import React, { useEffect, useState, useContext } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Stack } from "expo-router";
import { router } from 'expo-router';
import { Redirect } from "expo-router";
import { UserData } from "@/components/Veecontext";
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function Authlayouts() {
  const {isAuthenticated} = useContext(UserData)
  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to login page
      router.replace('/(tabs)');// Assuming 'Login' is the name of your login screen
    }
  }, [isAuthenticated]);

  return (
    <Stack>
   
        <Stack.Screen name="index"  options={{ headerShown: false }} />
       <Stack.Screen name="basicinfo" options={{ headerShown: false }} />
       <Stack.Screen name="country" options={{ headerShown: false }} />
       <Stack.Screen name="password" options={{ headerShown: false }} />
       <Stack.Screen name="signup" options={{ headerShown: false }} />
       <Stack.Screen name="signupmodal" options={{ headerShown: false,  presentation : 'fullScreenModal' }}  />
    </Stack>

  );
}
