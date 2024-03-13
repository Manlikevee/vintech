import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Stack } from "expo-router";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function Receiptlayout() {


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <BottomSheetModalProvider>
    <Stack>
          <Stack.Screen name="currencyswap" options={{ 
            headerShown: true
           }} />
        <Stack.Screen name="index"  options={{ headerShown: false }} />
       <Stack.Screen name="[ref]" options={{ headerShown: false }} />
    </Stack>
    </BottomSheetModalProvider>
  </GestureHandlerRootView>
  );
}
