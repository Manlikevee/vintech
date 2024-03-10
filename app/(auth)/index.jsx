import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Pressable, Image , Vibration} from 'react-native'
import React from 'react'
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { Ionicons } from '@expo/vector-icons';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Imageone from '../../assets/loginimg/one.jpg'
import Imagetwo from '../../assets/loginimg/two.jpg'
import Imagethree from '../../assets/loginimg/three.jpg'
import Imagefour from '../../assets/loginimg/four.jpg'
import Imagefive from '../../assets/loginimg/five.jpg'
import adap from '../../assets/images/adap.png'
const {width, height} = Dimensions.get('window')
import LottieView from 'lottie-react-native';
import { router } from 'expo-router';
export function mylogin() {
    Vibration.vibrate(20);
    router.push('/login');
  }
  

const Page = () => {
  
const mysignup=()=>{
  router.push('/(signup)');
}

  console.log(Imageone)
    const colorScheme = useColorScheme();
    const myimages = [Imagefive, Imageone, Imagetwo , Imagefour,  ];
  return (

    <View style={[{ flex:1, flexDirection: 'column',  alignItems: 'center', justifyContent: 'center', backgroundColor:'black', height: '100%', backgroundColor: Colors[colorScheme ?? 'light'].login }]}>
        <View style={styles.quarter}>
        {/* <Image
        source={{ uri: 'https://images.unsplash.com/photo-1709056842165-20d5f72064b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
        style={{ width: width, height: '100%' }}
      /> */}
    <SwiperFlatList
      autoplay
      autoplayDelay={4}
      autoplayLoop
      index={1}
      showPagination
      data={myimages}
      renderItem={({ item }) => (
        <View style={styles.child}>
     <Image
  source={item}
  style={{ width: width, height: '100%' }}
/>
        </View>
      )}
    />


              {/* <LottieView style={{ width: width, height: '100%', backgroundColor:'transparent', marginTop: 40 }}

source={require('../../assets/lottieimg/card.json')} autoPlay loop /> */}
        </View>
        <View style={[styles.rest,    {
          borderColor: Colors[colorScheme ?? 'light'].borderColor,
          backgroundColor: 'white'
        }, ]}>
            <View style={{backgroundColor: 'transparent', width: '100%', height:'100%', alignItems: 'center', justifyContent: 'center'}}>
        

          <View style={styles.bottomcontent}>
          <Image
  source={adap}
  style={{ width: 90, height: 80 , objectFit:'cover', alignSelf:'center'}}
/>
          <Text style={[styles.txtcenter, {
          color: Colors[colorScheme ?? 'light'].text,
        },]}>Welcome To <Text style={styles.boldblue}>Vintech</Text>  </Text>
      <Text style={styles.subtext}>Banking redefined – seamless transactions and personalized finance management, all in one app</Text>

      <View style={styles.buttongroup}>
<TouchableOpacity style={styles.bluebtn} onPress={mysignup} >
<Text style={styles.bluebtntext}>Create An Account</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.lightbluebtn}  onPress={mylogin}>
<Text style={styles.lightbluebtntext}>Sign In</Text>
</TouchableOpacity>
      </View>

          </View>

            </View>
      
            </View>
 
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
    quarter:{
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: '55%',
    },
    rest:{
        backgroundColor: 'transparent',
        width: width,
        height:  '45%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderTopWidth: 1,
      
    },
    bluebtn:{
        backgroundColor:'#E57F06',
        padding: 19,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
              },
              boldblue:{
                fontFamily: 'Satoshi',
                color:'#E57F06',
                fontWeight: 'bold',
                fontWeight: '900'
              },
              lightbluebtn:{
                backgroundColor:'#F0F3F5',
                padding: 19,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              },
              lightbluebtntext:{
        color: '#0369AB'
              },
             bluebtntext:{
                color: '#F0F3F5'
                      },
              txtcenter:{
                fontSize: 17,
                marginTop: 3,
                marginBottom: 2,
        textAlign: 'center',
 fontWeight: '900',
 fontFamily: 'Soraxxl',
        
              },
              alreadyhave:{
             fontSize: 15,
              marginTop: 20,
              marginBottom: 2,
        textAlign: 'center'
              },
              top: {
                flex: 1,
                width: '100%',
                backgroundColor: 'lightblue', // Example background color
                justifyContent: 'center',
                alignItems: 'center',
              },
              buttongroup:{
        padding: 10,
        gap: 20,
        width: '100%',
        marginTop: 10,
              },
              bottom: {
           
                flex: 1,
           
                width: '100%',
                backgroundColor: 'white', // Example background color
        
              },
              bottomcontent:{
           
                gap: 10,
                width: '100%',
              },
              heroImage: {
                width: '100%',
                height: '100%',
              },
              subtext:{
                fontWeight: '300',
                textAlign:'center',
                color: '#888'
              },
              container: { flex: 1, backgroundColor: 'blue' },
              child: { width, justifyContent: 'center' },
              text: { fontSize: width * 0.5, textAlign: 'center' },
})