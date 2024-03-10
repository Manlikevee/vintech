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
  ScrollView,
  Image,
} from "react-native";

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';



import Toast from 'react-native-toast-message';
import React, { useEffect, useState, useContext } from "react";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import * as LocalAuthentication from 'expo-local-authentication';
import { router } from 'expo-router';
import { UserData } from "@/components/Veecontext";
import { StatusBar } from "expo-status-bar";

const Page = () => {
  const [value, setValue] = React.useState(0);

  const countries = [
    { "id": "US", "name": "United States" },
    { "id": "GB", "name": "United Kingdom" },
    { "id": "NG", "name": "Nigeria" },
    { "id": "GH", "name": "Ghana" },
    { "id": "ZA", "name": "South Africa" },
    { "id": "CM", "name": "Cameroon" },
    { "id": "AF", "name": "Afghanistan" },
    { "id": "AL", "name": "Albania" },
    { "id": "DZ", "name": "Algeria" },
    { "id": "AS", "name": "American Samoa" },
    { "id": "AD", "name": "Andorra" },
    { "id": "AO", "name": "Angola" },
    { "id": "AI", "name": "Anguilla" },
    { "id": "AQ", "name": "Antarctica" },
    { "id": "AG", "name": "Antigua and Barbuda" },
    { "id": "AR", "name": "Argentina" },
    { "id": "AM", "name": "Armenia" },
    { "id": "AW", "name": "Aruba" },
    { "id": "AU", "name": "Australia" },
    { "id": "AT", "name": "Austria" }

  // other countries
];

  return (

  
    <View
    style={{
      flex: 1,
      paddingTop: 0,
      gap: 16,
   
      backgroundColor: "white",
    }}
  >
     <StatusBar style="light" backgroundColor="#025e99" />
<SafeAreaView style={{ gap: 10}}>
    <View style={{padding: 30, backgroundColor:'#025e99', paddingVertical: 30, gap: 30}}>
    <Text>signup</Text>

<TextInput
        autoCapitalize="none"
  style={styles.input}
  placeholder="Password"

  value='vee'
   // Hide password
/>
    </View>




<ScrollView contentContainerStyle={styles.content}>
          {countries.map(({ id, name }, index) => {
            const isActive = value === index;

            return (
              <TouchableOpacity
                key={id}
                onPress={() => {
                  setValue(index);
                }}
                style={styles.radioWrapper}>
                <Image
                  alt={`Flag of ${name}`}
                  style={styles.radioImage}
                  source={{
                    uri: `https://flagsapi.com/${id}/flat/64.png`,
                  }} />

                <View
                  style={[styles.radio, index === 0 && { borderTopWidth: 0 }]}>
                  <Text style={styles.radioLabel}>{name}</Text>

                  <View
                    style={[
                      styles.radioCheck,
                      isActive && styles.radioCheckActive,
                    ]}>
                    <FontAwesome
                      color="#fff"
                      name="check"
                      style={!isActive && { display: 'none' }}
                      size={12} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        </SafeAreaView>
    </View>

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
  input: {
    width: '100%',
color: 'white',
    borderColor: '#CFCFCF',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
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

  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#a69f9f',
  },
  content: {
    marginTop: 1,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
    padding: 12
  },
  /** Header */
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  headerClose: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 6,
    marginBottom: 16,
  },
  /** Radio */
  radio: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#e8e8e8',
    height: 54,
    paddingRight: 24,
  },
  radioWrapper: {
    paddingLeft: 5,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  radioImage: {
    width: 30,
    height: 30,
    marginRight: 12,
    alignItems: 'start',
    justifyContent: 'center',
  },
  radioLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: '#1C274C',
    marginBottom: 2,
   
  },
  radioCheck: {
    width: 22,
    height: 22,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    borderWidth: 1,
    borderColor: '#999B9A',
  },
  radioCheckActive: {
    borderColor: '#007bff',
    backgroundColor: '#007bff',
  },
});