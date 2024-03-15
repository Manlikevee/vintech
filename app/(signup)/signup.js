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
import React, { useEffect, useState, useContext, useRef } from "react";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { AntDesign, FontAwesome6, Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import * as LocalAuthentication from 'expo-local-authentication';
import { router } from 'expo-router';
import { UserData } from "@/components/Veecontext";

const Page = () => {
  const [otp, setOtp] = useState(["", '', '', '', '', '']);
  const inputRefs = useRef([]);
  const correctpin = '434343'
  const handleChange = (value, index) => {

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
     // Move to the next input
     if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    // Move to the previous input if deleting a character
    else if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }

  };

  const renderOtpInput = ({ item, index }) => (
    <TextInput
    ref={(ref) => (inputRefs.current[index] = ref)}
      style={styles.input}
      value={otp[index]}
      onChangeText={(value) => handleChange(value, index)}
      maxLength={1}
      secureTextEntry
      keyboardType="numeric"
    />
  );

  const showdb = () => {

  console.log('lll')
    if (otp.length === 6) {
      if (otp.includes('')) {
        
        console.log('empty space')
        

      } else {
        const enteredPin = otp.join('');
        if (enteredPin === correctpin) {
          router.replace('/(tabs)/profile');
        } else {
          console.log('incorrect code')
        }
      }
    } 
    else{
      console.log('error')
    }

  }

  return (
    <View
    style={{
      flex: 1,
      padding: 15,
      gap: 3,
   
      backgroundColor: "white",
    }}
  >

<SafeAreaView style={{ gap: 10, flex:1, }}>
 
 
 <View style={{ backgroundColor:'transparent', paddingVertical: 30, gap: 0, flex:1}}>
 
 <View style= {{ backgroundColor:'transparent', paddingVertical: 10, gap: 2, flexDirection: 'row', alignItems:'center', justifyContent:
 'space-between'}}> 
 <Octicons name="arrow-left" size={20} color='#999' />
   <View style={{flexDirection:'row', gap: 6, alignItems:'center'}}> 
     
   <View style={{padding:4, backgroundColor:'#007146', height: 12, width:12, borderRadius: 50}} />  
   <View style={{padding:1, backgroundColor: '#007146', height: 3, width:26, borderRadius: 50}} />  
   <View style={{padding:4, backgroundColor: '#007146', height: 12, width:12, borderRadius: 50}} />  
   <View style={{padding:1, backgroundColor: '#007146', height: 3, width:26, borderRadius: 50}} />  
   <View style={{padding:4, backgroundColor: '#007146', height: 12, width:12, borderRadius: 50}} />  
   <View style={{padding:1, backgroundColor: '#007146', height: 3, width:26, borderRadius: 50}} />  
   <View style={{padding:4, backgroundColor: '#E57F06', height: 12, width:12, borderRadius: 50}} /> 
     
   </View>
 <View><Text>1/4</Text></View>
 </View>
 <View style={{paddingVertical: 4, marginTop: 15}}>
<Text style={styles.bigtxt}>Verify Your Email</Text>
<Text style={styles.subtext}>
Please check your email for a 6-digit verification code to complete your account verification.
  </Text>
</View>

<View style={{alignItems:'center', justifyContent:'center', marginTop:30}}>
        <FlatList
          data={otp}
          scrollEnabled={false}
          style={{flexGrow:0}}
          renderItem={renderOtpInput}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        />
      </View>


    </View>
    <View style={{paddingVertical: 20, gap: 10}}>
  <TouchableOpacity style={{padding: 20, backgroundColor:'#E57F06', borderRadius: 7}} onPress={showdb} >
    <Text style={{color: 'white', textAlign:'center'}}>Proceed</Text>
    </TouchableOpacity>

    <Text style={{color: 'black', textAlign:'center', fontWeight:'700'}}><AntDesign name="reload1"/>  Resend Verification Code </Text>
</View>
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
  otpinput: {
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
  input: {
    width: 45,
    height: 45,
 
    borderWidth: 1,
    borderColor: '#CFCFCF',
    textAlign: "center",
    marginHorizontal: 5,
    fontSize: 24,
    fontWeight: '800',
    borderRadius: 4,
    fontFamily:'Satoshimid'
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