import { StyleSheet, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import { Text, View } from '@/components/Themed';
import { UserData } from '@/components/Veecontext';
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { Ionicons } from '@expo/vector-icons';

const Balance = () => {
  const { amt } = useContext(UserData);
  const [visibleBalance, setvisibleBalance] = useState(false);
  const setfuncvisible = () => {
    setvisibleBalance(!visibleBalance)
   
  }  
    const colorScheme = useColorScheme();
  return (

    <View       style={[
        styles.mybalance,
        {
          borderColor: Colors[colorScheme ?? 'light'].borderColor,
        },
      ]}  lightColor="#fff" darkColor="#111111">
        
        
        <View style={{backgroundColor:'transparent', flexDirection: 'row', gap: 6, alignItems:'flex-end'}}>
       
            <Text style={[styles.pcent,       {
          backgroundColor: Colors[colorScheme ?? 'light'].success,
        },  ]} lightColor="#1BA019" darkColor="#d4d3d3" >00.00%</Text>
          
         
        <Text style={styles.accenttext} lightColor="#00000099" darkColor="#ccc">compared to last month</Text>
        </View>
  <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 2, backgroundColor:'transparent', alignItems:'flex-end', marginBottom: 5}}>
      <View style={{flexDirection: 'row', gap: 2, backgroundColor:'transparent', alignItems:'flex-end'}}>
      <Text style={styles.bal} lightColor="#E57F06" darkColor="#ccc">
        
      {!visibleBalance ? ('₦ *****') : amt }</Text>
      <Text style={styles.balsmall} lightColor="#E57F0666" darkColor="#ccc">
       
        {!visibleBalance ? ('.**') : ('00') }
        </Text>
      </View>
<Ionicons onPress={setfuncvisible}
 name={!visibleBalance ? 'eye-off-outline' : 'eye-outline'}

size={22} color={Colors[colorScheme ?? "light"].icontext}/>
    
  </View>

    </View>

  )
}

export default Balance

const styles = StyleSheet.create({
    mybalance:{
        marginTop: 20, 
        padding: 15,
        paddingVertical: 25,
        borderRadius: 7,
        borderWidth: 1,
        borderColor:  '#1C274C33',
        flexDirection: 'column',
        gap: 15,
        
     },
     pcent:{
      fontSize: 12,
      fontFamily: 'Satoshimid',
      padding: 5,
      backgroundColor:'#0000000D',
      borderRadius: 10,
     },
     accenttext:{
// lineHeight:20,
fontSize: 14,
fontFamily: 'Satoshimid',
paddingBottom:5,
     },
balsmall:{
  fontFamily: 'Satoshi',
  fontSize: 20,
  paddingBottom: 2,
  fontWeight: '200',
},
     bal:{
        fontFamily: 'Satoshimid',
        fontSize: 31,
        fontWeight: '600',
     }

})