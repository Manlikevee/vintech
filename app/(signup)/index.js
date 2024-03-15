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
import React, { useContext, useMemo, useEffect,  useState } from "react";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { FontAwesome6, Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import * as LocalAuthentication from 'expo-local-authentication';
import { router } from 'expo-router';
import { UserData } from "@/components/Veecontext";
import { StatusBar } from "expo-status-bar";

const Page = () => {


  const { selectedCountryId, countries, countryname } = useContext(UserData);

  // Memoize the derived state to avoid unnecessary recalculations

  const handleGoBack = () => {
    router.back();
  };
  // Function to navigate to signup modal
  const navigateToSignup = () => {
    router.push('/signupmodal');
  }


const nextstep = () =>{
  router.push('/basicinfo');
}

  return (

  
    <View
    style={{
      flex: 1,
      padding: 15,
      gap: 16,
   
      backgroundColor: "white",
    }}
  >

<SafeAreaView style={{ gap: 10, flex:1}}>
    <View style={{ backgroundColor:'transparent', paddingVertical: 30, gap: 0, flex:1}}>
 
<View style= {{ backgroundColor:'transparent', paddingVertical: 10, gap: 2, flexDirection: 'row', alignItems:'center', justifyContent:
'space-between'}}> 
<Octicons name="arrow-left" size={20} color='#999' />
  <View style={{flexDirection:'row', gap: 6, alignItems:'center'}}> 
    
  <View style={{padding:4, backgroundColor:'#E57F06', height: 12, width:12, borderRadius: 50}} />  
  <View style={{padding:1, backgroundColor: '#93BEAB', height: 3, width:26, borderRadius: 50}} />  
  <View style={{padding:4, backgroundColor: '#93BEAB', height: 12, width:12, borderRadius: 50}} />  
  <View style={{padding:1, backgroundColor: '#93BEAB', height: 3, width:26, borderRadius: 50}} />  
  <View style={{padding:4, backgroundColor: '#93BEAB', height: 12, width:12, borderRadius: 50}} />  
  <View style={{padding:1, backgroundColor: '#93BEAB', height: 3, width:26, borderRadius: 50}} />  
  <View style={{padding:4, backgroundColor: '#93BEAB', height: 12, width:12, borderRadius: 50}} />  
    
  </View>
<View><Text>1/4</Text></View>
</View>

<View style={{paddingVertical: 4, marginTop: 15}}>
<Text style={styles.bigtxt}>What Country Do You Live In ?</Text>
<Text style={styles.subtext}>
Take the first step towards personalized financial empowerment by selecting your current location:
  </Text>
</View>
<Text style={{paddingVertical:8,  fontSize: 14, fontWeight:'400', marginTop:10}}>Country</Text>
    <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Search For A Country"
          value={countryname}
          onPressIn={navigateToSignup}
        />
    </View>




<View>
  <TouchableOpacity style={{padding: 20, backgroundColor:'#E57F06', borderRadius: 7}} onPress={nextstep}>
    <Text style={{color: 'white', textAlign:'center'}}>Proceed</Text>
    </TouchableOpacity>
</View>

        </SafeAreaView>
    </View>

  )
}

export default Page

const styles = StyleSheet.create({

  input: {
    width: '100%',
color: 'black',
    borderColor: '#CFCFCF',
    borderWidth: 1,
    borderRadius: 4,
    padding: 7,
    fontSize:13,
    backgroundColor: 'transparent',
    fontFamily:'Satoshi'
  },
bigtxt:{
fontSize: 22,
fontFamily: 'Soraxxl',
marginBottom: 5
},
subtext:{
  fontSize: 15,
  color: '#666',
  fontFamily: 'Satoshimid'
}
});