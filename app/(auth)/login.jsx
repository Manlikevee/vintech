import {
  Alert,
  FlatList,
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
  const colorScheme = useColorScheme();
  const [otp, setOtp] = useState(["", '', '', '']); // Initialize OTP values
  const [wrong, setIswrong] = useState(false)
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const {isAuthenticated} = useContext(UserData)
  const {setIsAuthenticated} = useContext(UserData)
  const correctpin = '1212'

  useEffect(() => {
    if (otp.length === 4) {
      if (otp.includes('')) {

        setIswrong(false)

      } else {

        const enteredPin = otp.join('');
        if (enteredPin === correctpin) {
 
          Toast.show({
            type: 'success',
            text1: 'Login Successful',
          });
          finalsay()
        } else {
          setIsAuthenticated(false);
          setIswrong(true)
      Toast.show({
      type: 'error',
      text1: 'Incorrect password. 4 attempts remaining.',
    });
    Vibration.vibrate(120);
        }
      }
    }
  }, [otp]);

const finalsay = () => {

  setIsAuthenticated(true);
  router.replace('/(tabs)/profile');
}

  const handlePress = (item) => {
   
    if (item === "fingerprint") {
  
      console.log("Fingerprint button pressed");
      onAuthenticate();
    }
     else if (item === "delete-left") {
      Vibration.vibrate(70);
      handleDelete();
    } 
    else {
      Vibration.vibrate(40);
      const newOtp = [...otp];
      const emptyIndex = newOtp.findIndex((code) => code === "");
      if (emptyIndex !== -1) {
        newOtp[emptyIndex] = item;
        setOtp(newOtp);
      }
    }
  };

  const onAuthenticate = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate',
        fallbackLabel: 'Enter Password',
      });

      Toast.show({
        type: 'success',
        text1: 'Login Successful',
      });
   
      console.log(result);
      if(result?.success == true){
        finalsay()
      }
      else{

        Toast.show({
          type: 'error',
          text1: 'Authentication Failed.',
        });
  
      }
    } catch (error) {
      console.error('Authentication error:', error);
      Toast.show({
        type: 'error',
        text1: 'Incorrect password. 4 attempts remaining.',
      });

    }
  };

  const handleDelete = () => {
    const newOtp = [...otp];
    
    const lastFilledIndex = newOtp.reduce(
      (acc, cur, index) => (cur !== "" ? index : acc),
      -1
    );
    if (lastFilledIndex !== -1) {
      newOtp[lastFilledIndex] = "";
      setOtp(newOtp);
    }
  };

  const handleChange = (value, index) => {

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handlePress(item)}>
      <View style={styles.buttonInner}>
        {item === "fingerprint" ? (
          <FontAwesome6 name="fingerprint" size={24} color="black" />
        ) : item === "delete-left" ? (
          <FontAwesome6 name="delete-left" size={24} color="black" />
        ) : (
          <Text style={styles.buttonText}>{item}</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderOtpInput = ({ item, index }) => (
    <TextInput
      style={[styles.otpInput, {
        borderColor: Colors[colorScheme ?? 'light'].borderColor,
      },]}
      value={otp[index]}
      onChangeText={(value) => handleChange(value, index)}
      maxLength={1}
      secureTextEntry
      keyboardType="numeric"
    />
  );

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 80,
        gap: 6,
        padding: 15,
        backgroundColor: "white",
      }}
    >
<View style={{height: '25%',backgroundColor:'transparent', gap: 17}}>
<View style={{ flexDirection: "row", marginTop:10 }}>
        <View
          style={{
            backgroundColor:'#F0F3F5',
            padding: 12,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{color: '#0369AB', fontSize: 19, fontWeight:'500'}}>VO</Text>
        </View>
      </View>
      <View style={{ gap: 3 }}>
        <Text
        numberOfLines={1}
          style={{ fontSize: 26, fontFamily: "Satoshi", fontWeight: "700" }}
        >
          Welcome Back Victor Ebube Odah
        </Text>
        <Text style={{ fontFamily: "Satoshi" }}>Enter Your 4-Digit pin { wrong ? ('wrong') : ('') }  </Text>
      </View>


      <View >
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

<View style={{height:'70%', backgroundColor:'transparent', gap: 20}}>
   

      <View
        style={{
          backgroundColor: "transparent",
        
          marginTop: 50,
          alignItems: "center",
        }}
      >
        <FlatList
          data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "fingerprint", "0", "delete-left"]}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          numColumns={3}
        />
      </View>

      <View style={{alignItems:'center'}}>
        <Text>Not Your Account? <Link href='/(auth)'> Logout</Link>  </Text>
      </View>
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
});
