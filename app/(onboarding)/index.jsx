import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack, useNavigation } from 'expo-router';
import LottieView from 'lottie-react-native';
import Onboarding from 'react-native-onboarding-swiper';

const {width, height} = Dimensions.get('window')

const index = () => {
  return (
    <View style={{ flex: 1,  }}>
<Onboarding
containerStyles={{paddingHorizontal:16,}}
  pages={[
    {
      backgroundColor: '#90B8F8',
      image: (
   
        <LottieView style={styles.lottie}

source={require('../../assets/lottieimg/one.json')} autoPlay loop />
   
      ),
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#667761',
      image: (
   
        <LottieView style={styles.lottie}

source={require('../../assets/lottieimg/two.json')} autoPlay loop />
   
      ),
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },

    {
      backgroundColor: '#EEE2DE',
      image: (
   
        <LottieView style={styles.lottie}

source={require('../../assets/lottieimg/four.json')} autoPlay loop />
   
      ),
      title:  <Text>beeee </Text>,
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#fff',
      image: (
   
        <LottieView style={styles.lottie}

source={require('../../assets/lottieimg/six.json')} autoPlay loop />
   
      ),      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#fff',
      image: (
   
        <LottieView style={styles.lottie}

source={require('../../assets/lottieimg/five.json')} autoPlay loop />
   
      ),
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
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
  }
})