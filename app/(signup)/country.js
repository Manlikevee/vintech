import {
    Alert,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    View,
  } from "react-native";
  import Toast from 'react-native-toast-message';
  import React, { useEffect, useState, useContext } from "react";
  import Colors from "@/constants/Colors";
  import { useColorScheme } from "@/components/useColorScheme";
  import { FontAwesome6 } from "@expo/vector-icons";
  import { Link } from "expo-router";
  import * as LocalAuthentication from 'expo-local-authentication';
  import { router } from 'expo-router';
  import { UserData } from "@/components/Veecontext";
  
  const Page = () => {
    return (
  
      <SafeAreaView style={{flex: 1}}>
      <View
      style={{
        flex: 1,
        paddingTop: 40,
        gap: 16,
        padding: 20,
        backgroundColor: "white",
      }}
    >
        <Text>signup</Text>
      </View>
      </SafeAreaView>
    )
  }
  
  export default Page
  
  const styles = StyleSheet.create({
    otpContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },
    otpInput: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor: "black",
      textAlign: "center",
      marginHorizontal: 5,
      fontSize: 24,
      fontWeight: '800',
      borderRadius: 4,
      fontFamily:'Satoshimid'
    },
    button: {
      width: 110,
      height: 100,
      justifyContent: "center",
      alignItems: "center",
      margin: 2,
      borderWidth: 1,
      borderColor: "transparent",
    },
    buttonInner: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      fontSize: 20,
      fontWeight: '800',
      borderRadius: 4,
      fontFamily:'Satoshimid'
    },
  });