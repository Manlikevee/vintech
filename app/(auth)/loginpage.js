import {
    Alert,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    View,
    Image
  } from "react-native";
  import Toast from 'react-native-toast-message';
  import React, { useEffect, useState, useContext } from "react";
  import Colors from "@/constants/Colors";
  import { useColorScheme } from "@/components/useColorScheme";
  import { FontAwesome6 } from "@expo/vector-icons";
  import { Link } from "expo-router";
  import adap from '../../assets/images/adap.png'
  
  const Page = () => {
    const colorScheme = useColorScheme();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');


    const validateEmail = (text) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!text) {
        setEmailError('Please enter your email address.');
      } else if (!emailRegex.test(text)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    };
  




    return (
      <View
        style={{
          flex: 1,
          gap: 6,
          padding: 15,
          backgroundColor: "white",
        }}
      >


<View style={{ gap:0, justifyContent:"center", flex:1}}> 
<Image
  source={adap}
  style={{ width: 90, height: 80 , objectFit:'cover', alignSelf:'center'}}
/>
<Text style={{fontSize:20, textAlign:'center', fontSize: 22,
fontFamily: 'Soraxxl', paddingVertical:0}}>Login</Text>
<Text style={styles.subtext}>
Explore Financial Opportunities.
  </Text>


<View style={{ gap: 6, paddingHorizontal:10 }}>
          <Text style={{ paddingVertical: 3, fontSize: 13, fontWeight: '400', fontFamily:'Soramid', color:'#1E293B' }}>Email Address</Text>
          <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={(text) => { setEmail(text); validateEmail(text); }}
    
    
        />
          <Text style={styles.errorMessage}>{emailError}</Text>
        </View>

        <View style={{ gap: 6, paddingHorizontal:10  }}>
<Text style={{fontSize: 13, fontWeight:'400', marginTop: 0, fontFamily:'Soramid'}}>Enter Password</Text>
<TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => { setPassword(text) }}
        />
            <Text style={styles.errorMessage}></Text>
</View>

<View style={{marginTop:-6, alignSelf:'flex-end', paddingHorizontal:10, paddingBottom:9}}>
  <Text style={{color:'#3C9AFB', fontFamily:'Satoshimid', fontSize:13, fontWeight:'900'}}
  >
  <Link href='(auth)/login'>Forgot Password?</Link>
  </Text>
</View>
<View style={{ gap: 6, paddingHorizontal:10, marginTop:9  }}>
<TouchableOpacity style={{padding: 20, backgroundColor:'#E57F06', borderRadius: 7}} >
    <Text style={{color: 'white', textAlign:'center'}}>Proceed</Text>
    </TouchableOpacity>
</View>

<Text style={{ gap: 6, paddingHorizontal:10, marginTop:29, textAlign:'center'  }} >Don't have an account? <Link href='(auth)'>Create Account</Link> </Text>
</View>


      </View>
    );
  };
  
  export default Page;
  
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
      width: 100,
      padding: 32,
      justifyContent: "center",
      alignItems: "center",
      margin: 2,
      borderWidth: 1,
      backgroundColor: 'white',
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
    input: {
      width: '100%',
  color: 'black',
      borderColor: '#CFCFCF',
      borderWidth: 1,
      borderRadius: 4,
      padding: 7,
      fontSize:13,
      backgroundColor: 'transparent',
  
    },
  bigtxt:{
  fontSize: 22,
  fontFamily: 'Soraxxl',
  marginBottom: 5
  },
  errorMessage:{
    color:'#a92f41',
    fontSize: 12,
    paddingBottom:2,
    paddingTop: 2,
    textAlign:'right',
    
  },
  subtext:{
    fontSize: 15,
    color: '#666',
    paddingBottom: 20,
    paddingTop: 4,
    textAlign: 'center',
    fontFamily:'Satoshimid'
  }
  });
  