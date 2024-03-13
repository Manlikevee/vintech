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
import React, { useContext, useMemo, useEffect,  useState, useRef } from "react";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { FontAwesome6, Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import * as LocalAuthentication from 'expo-local-authentication';
import { router } from 'expo-router';
import { UserData } from "@/components/Veecontext";
import { StatusBar } from "expo-status-bar";

const Page = () => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [surnameError, setSurnameError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [referralCodeError, setReferralCodeError] = useState('');

  const { selectedCountryId, countries, countryname } = useContext(UserData);

  // Memoize the derived state to avoid unnecessary recalculations

  const surnameRef = useRef();
  const genderRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const referralCodeRef = useRef();

  const handleOnSubmitEditing = (ref) => {
    ref.current.focus();
  };
  // Function to navigate to signup modal
  const navigateToSignup = () => {
    router.push('/signupmodal');
  }
  const handleGoBack = () => {
    router.back;
  };

  const validateFirstName = (name) => {
    if (!name) {
      setFirstNameError('Please enter your first name.');
    } else {
      setFirstNameError('');
    }
  };



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
  
  const validateSurname = (text) => {
    if (!text) {
      setSurnameError('Please enter your surname.');
    } else {
      setSurnameError('');
    }
  };
  
  const validateGender = (text) => {
    if (!text) {
      setGenderError('Please select your gender.');
    } else {
      setGenderError('');
    }
  };
  
  const handleSubmit = () => {

    // Add validation for other fields similarly
    validateFirstName(firstName);
    validateSurname(surname);
    validateGender(gender);
    validateEmail(email);
    // If all fields are valid, proceed with submission
    if (firstName && surname /* add other validations here */) {
      // Proceed with form submission
      console.log('Form submitted successfully!');
      router.push('/password');
    }
  };
const nextstep = () =>{
  router.push('/basicinfo');
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
    <View style={{ backgroundColor:'transparent', paddingVertical: 18, gap: 0, flex:1}}>
 
<View style= {{ backgroundColor:'transparent', paddingVertical: 10, gap: 2, flexDirection: 'row', alignItems:'center', justifyContent:
'space-between'}}> 
<Octicons name="arrow-left" size={20} color='red' onPress={handleGoBack} />
  <View style={{flexDirection:'row', gap: 6, alignItems:'center'}}> 
    
  <View style={{padding:4, backgroundColor:'#007146', height: 12, width:12, borderRadius: 50}} />  
  <View style={{padding:1, backgroundColor: '#007146', height: 3, width:26, borderRadius: 50}} />  
  <View style={{padding:4, backgroundColor: '#E57F06', height: 12, width:12, borderRadius: 50}} />  
  <View style={{padding:1, backgroundColor: '#93BEAB', height: 3, width:26, borderRadius: 50}} />  
  <View style={{padding:4, backgroundColor: '#93BEAB', height: 12, width:12, borderRadius: 50}} />  
  <View style={{padding:1, backgroundColor: '#93BEAB', height: 3, width:26, borderRadius: 50}} />  
  <View style={{padding:4, backgroundColor: '#93BEAB', height: 12, width:12, borderRadius: 50}} /> 
    
  </View>
<View><Text>2/4</Text></View>
</View>

<View style={{paddingVertical: 4, marginTop: 15}}>
<Text style={styles.bigtxt}>Basic Information</Text>
<Text style={styles.subtext}>
Embark on your path to financial empowerment. Let's get started by capturing some basic information
  </Text>
</View>

<ScrollView style={{gap:0, padding: 5 }} showsVerticalScrollIndicator={false}>
  <View style={{gap:1}}>
  <Text style={{paddingVertical:8,  fontSize: 13, fontWeight:'400', marginTop: 20}}>First Name (as it appears on your ID)</Text>
  <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => { setFirstName(text); validateFirstName(text); }}
          onSubmitEditing={() => handleOnSubmitEditing(surnameRef)}
        />
        <Text style={styles.errorMessage}>{firstNameError}</Text>
  </View>

  <View style={{gap:1}}>
  <Text style={{ paddingVertical: 3, fontSize: 13, fontWeight: '400',  }}>Surname</Text>
  <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Surname"
          value={surname}
          onChangeText={(text) => { setSurname(text); validateSurname(text); }}
          ref={surnameRef}
          onSubmitEditing={() => handleOnSubmitEditing(genderRef)}
        />
   <Text style={styles.errorMessage}>{surnameError}</Text>
  </View>

  

  <View style={{ gap: 1 }}>
          <Text style={{ paddingVertical: 3, fontSize: 13, fontWeight: '400' }}>Gender</Text>
          <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Gender"
          value={gender}
          onChangeText={(text) => { setGender(text); validateGender(text); }}
          ref={genderRef}
          onSubmitEditing={() => handleOnSubmitEditing(emailRef)}
        />
          <Text style={styles.errorMessage}>{genderError}</Text>
        </View>


        <View style={{ gap: 1 }}>
          <Text style={{ paddingVertical: 3, fontSize: 13, fontWeight: '400' }}>Email Address</Text>
          <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={(text) => { setEmail(text); validateEmail(text); }}
          ref={emailRef}
          onSubmitEditing={() => handleOnSubmitEditing(phoneNumberRef)}
        />
          <Text style={styles.errorMessage}>{emailError}</Text>
        </View>



        <View style={{ gap: 1 }}>
          <Text style={{ paddingVertical: 3, fontSize: 13, fontWeight: '400' }}>Phone Number</Text>
          <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          ref={phoneNumberRef}
          onSubmitEditing={() => handleOnSubmitEditing(referralCodeRef)}
        />
          <Text style={styles.errorMessage}>{phoneNumberError}</Text>
        </View>


        <View style={{ gap: 1 }}>
          <Text style={{ paddingVertical: 3, fontSize: 13, fontWeight: '400' }}>Referral Code (optional)</Text>
          <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Referral Code"
          value={referralCode}
          onChangeText={setReferralCode}
          ref={referralCodeRef}
          onSubmitEditing={handleSubmit}
        />
          <Text style={styles.errorMessage}>{referralCodeError}</Text>
        </View>


 




</ScrollView>

    </View>




<View>
  <TouchableOpacity style={{padding: 20, backgroundColor:'#E57F06', borderRadius: 7}} onPress={handleSubmit}>
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
  fontFamily: 'Satoshimid'
}
});