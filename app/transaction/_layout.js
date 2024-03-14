import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Link, Stack } from "expo-router";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Avatar from "@/components/Reusables/ui/Avatar";
import { Pressable } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
export default function Receiptlayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <BottomSheetModalProvider>
    <Stack>
          <Stack.Screen name="currencyswap" options={{ 
            headerShown: true
        ,
        headerTitle: '',
           headerLeft: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                 
                    <Avatar />
                
                )}
              </Pressable>
            </Link>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <SimpleLineIcons
                    name="logout"
                    size={18}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
           }} />
        <Stack.Screen name="index"  options={{ headerShown: false }} />
       <Stack.Screen name="[ref]" options={{ headerShown: false }} />
    </Stack>
    </BottomSheetModalProvider>
  </GestureHandlerRootView>
  );
}
