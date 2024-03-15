import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Redirect, Stack, useNavigation } from 'expo-router';
import LottieView from 'lottie-react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { router } from 'expo-router';
const {width, height} = Dimensions.get('window')


const index = () => {
  const mylogin = () => {
    router.replace('/(auth)/');
  }
  
  return (

    <View style={{ flex: 1,  }}>
        {/* <Redirect href="/transaction/alltransactions" /> */}
<Onboarding
bottomBarHighlight={false}
containerStyles={{paddingHorizontal:16,}}
titleStyles={{ 
fontFamily: 'Satoshi',
fontWeight: 'bold',
fontSize: 25

}}
onDone={mylogin}
onSkip={mylogin}
  pages={[
   
    {
      backgroundColor: '#fff',
      image: (
   
        <LottieView style={styles.lottie}

source={require('../../assets/lottieimg/five.json')} autoPlay loop />
   
      ),
      title: 'Quick Sign-up Process',
      subtitle: 'Register easily in just a few steps. Get started now!',
    },

   
//     {
//       backgroundColor: '#90B8F8',
//       image: (
   
//         <LottieView style={styles.lottie}

// source={require('../../assets/lottieimg/one.json')} autoPlay loop />
   
//       ),
//       title: 'Dashboard Insights',
//       subtitle: 'View detailed analytics and track your progress effortlessly.',
//     },
//     {
//       backgroundColor: '#CBBCF6',
//       image: (
   
//         <LottieView style={styles.lottie}

// source={require('../../assets/lottieimg/exc.json')} autoPlay loop />
   
//       ),
//       title: 'Multi-Currency Support',
//       subtitle: 'Seamlessly transact in various currencies with ease and convenience.',
//     },

    {
      backgroundColor: '#EEE2DE',
      image: (
   
        <LottieView style={styles.lottie}

source={require('../../assets/lottieimg/four.json')} autoPlay loop />
   
      ),
      title:  'Secure Transactions',
      subtitle: 'Your data is always protected. Experience worry-free transactions today.',
    },
    {
      backgroundColor: '#fff',
      image: (
   
        <LottieView style={styles.lottie}

source={require('../../assets/lottieimg/six.json')} autoPlay loop />
   
      ),      title: 'Fast & Seamless Payments',
      subtitle: 'Experience swift and hassle-free transactions anytime, anywhere.',
    },
    {
      backgroundColor: '#5E63B6',
      image: (
   
        <LottieView style={styles.lottie}

source={require('../../assets/lottieimg/card.json')} autoPlay loop />
   
      ),      title: 'Virtual & Physical Cards',
      subtitle: 'Enjoy the flexibility of virtual and physical cards for your needs.',
    },



    
  ]}
/>

    </View>
  )
}

export default index

const styles = StyleSheet.create({

  lottie:{
    width: width * 0.9,
    height: width  * 0.9,
  },
  gtext:{
    fontSize: 25,
    fontFamily: 'Satoshimid',
    fontWeight: '700',
      },
})