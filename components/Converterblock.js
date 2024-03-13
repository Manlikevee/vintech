import { Image, StyleSheet, TextInput, } from 'react-native'
import React from 'react'
import { useState, useContext, useRef } from 'react';
import { UserData } from '@/components/Veecontext';
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { Text, View } from '@/components/Themed';
import accounting from 'accounting';
const Converterblock = ({ readonly, amount, currencyid }) => {
  const colorScheme = useColorScheme();
  const {activeCurrency} = useContext(UserData)
  const {UserAccounts} = useContext(UserData)
  
  let currencydata = ''
    if (readonly) {
        
       currencydata = UserAccounts.find(country => country.id == currencyid);  
       console.log(currencydata)
    }
    else{
        currencydata = activeCurrency
       
    }


  
  
  return (
    <View       style={[
        styles.mybalance,
        {
          borderColor: Colors[colorScheme ?? 'light'].borderColor,
        },
      ]}  lightColor="#fff" darkColor="#111111">
<View style={styles.blockone}>
  
    <Text style={styles.label} lightColor='#00000099'>

        {currencydata?.currency} Balance</Text>
    <Text style={styles.currency} lightColor='#E57F06'>{accounting.formatMoney(currencydata?.balance, currencydata?.symbol)}</Text>
</View>
<View style={styles.blocktwo}>

    <TextInput  textAlign="right"  keyboardType="numeric"  style={styles.input} placeholder="0.00"/>
 <Text style={styles.input} lightColor='#000000'>$</Text>
  
</View>
    </View>
  )
}

export default Converterblock

const styles = StyleSheet.create({
    mybalance:{
        padding:10,
        borderWidth: 1,
        borderRadius: 5,
        gap: 10,
        flexDirection:'row',
        alignItems: 'center'

    },
    blockone:{
        width: '40%',
        padding:5,
    
        gap:2,
        flexDirection:'column'
    } ,  
    currency:{
fontFamily:'Satoshimid',
fontSize: 14,
lineHeight:20
    },
    label:{
      
        fontSize: 13,
        
    },
     blocktwo:{
        width: '56%',
        padding:5,
alignItems:'center',

        gap:0,
        flexDirection:'row-reverse'
    },
    input:{
        fontFamily:'Satoshimid',
padding:6,
fontSize:17,
    }

})