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


  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true); // To track if passwords match
  const [step1Success, setStep1Success] = useState(false); // To track if step 1 is completed
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);

  // Memoize the derived state to avoid unnecessary recalculations

  // Function to handle password input
  const handlePasswordChange = (text) => {
    setPassword(text);
    // Check if password matches confirm password
    setPasswordMatch(text === confirmPassword);
    // Check if password meets criteria
    setStep1Success(text.length >= 8);
    setHasNumber(/\d/.test(text));
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(text));
    setHasLowercase(/[a-z]/.test(text));
    setHasUppercase(/[A-Z]/.test(text));
  };

  // Function to handle confirm password input
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    // Check if password matches confirm password
    setPasswordMatch(password === text);
  };

const nextstep = () =>{
  router.push('/signup');
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
    
  <View style={{padding:4, backgroundColor:'#007146', height: 12, width:12, borderRadius: 50}} />  
  <View style={{padding:1, backgroundColor: '#007146', height: 3, width:26, borderRadius: 50}} />  
  <View style={{padding:4, backgroundColor: '#007146', height: 12, width:12, borderRadius: 50}} />  
  <View style={{padding:1, backgroundColor: '#007146', height: 3, width:26, borderRadius: 50}} />  
  <View style={{padding:4, backgroundColor: '#E57F06', height: 12, width:12, borderRadius: 50}} />  
  <View style={{padding:1, backgroundColor: '#93BEAB', height: 3, width:26, borderRadius: 50}} />  
  <View style={{padding:4, backgroundColor: '#93BEAB', height: 12, width:12, borderRadius: 50}} /> 
    
  </View>
<View><Text>1/4</Text></View>
</View>

<View style={{paddingVertical: 4, marginTop: 15}}>
<Text style={styles.bigtxt}>Create Password</Text>
<Text style={styles.subtext}>
Select a strong and secure password to protect your financial information and ensure the safety of your account.
  </Text>
</View>
<View style={{ gap: 1 }}>
<Text style={{paddingVertical:8,  fontSize: 13, fontWeight:'400', marginTop: 20}}>Enter Password</Text>
<TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
        />
            <Text style={styles.errorMessage}></Text>
</View>

<View style={{ gap: 1 }}>
<Text style={{paddingVertical:8,  fontSize: 14, fontWeight:'400', marginTop:10}}>Repeat Password</Text>
<TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
        />
    <Text style={styles.errorMessage}>
    {passwordMatch ? '' : 'Passwords do not match'}
    </Text>
    </View>

<Text style={{marginTop: 29}}>At Least:</Text>
<View style={{flexWrap: 'wrap', flexDirection:'row', gap: 10, marginTop: 13}}>
      <Text style={[styles.pill, hasNumber && { backgroundColor: '#E1F7E3', color: '#23BD33' , borderColor:'#D1E2DC'  }]}>A number</Text>
      <Text style={[styles.pill, step1Success && { backgroundColor: '#E1F7E3', color: '#23BD33', borderColor:'#D1E2DC' }]}> 8 Characters</Text>
      <Text style={[styles.pill, hasUppercase && { backgroundColor: '#E1F7E3', color: '#23BD33' , borderColor:'#D1E2DC' }]}>An uppercase letter</Text>
      <Text style={[styles.pill, hasLowercase && { backgroundColor: '#E1F7E3', color: '#23BD33' , borderColor:'#D1E2DC' }]}>A lowercase letter</Text>
      <Text style={[styles.pill, hasSpecialChar && { backgroundColor: '#E1F7E3', color: '#23BD33' , borderColor:'#D1E2DC' }]}>A special character</Text>
        
</View>

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
  errorMessage:{
    color:'#a92f41',
    fontSize: 12,
    paddingBottom:2,
    paddingTop: 2,
    textAlign:'right',
    
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
pill:{
  padding:8,
  borderRadius: 6,
  backgroundColor:'#f3f3f3',
  fontSize: 13,
  color: '#666',

  borderWidth: 1,
  borderColor:'#CCC'
}
});