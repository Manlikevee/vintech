import { Image, StyleSheet, TextInput, } from 'react-native'
import React from 'react'
import { useState, useContext, useRef } from 'react';
import { UserData } from '@/components/Veecontext';
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { Text, View } from '@/components/Themed';
import accounting from 'accounting';
const Converterblock = ({ readonly, amount, currencyid, figure, setfigure, validateCurrency, convertedvalue }) => {
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
    <View style={[
        styles.mybalance,
        {
          borderColor: Colors[colorScheme ?? 'light'].borderColor,
        },
      ]}  lightColor="#fff" darkColor="#111111">
            <View       style={[
        styles.mybalancetwo,
        {
          borderColor: Colors[colorScheme ?? 'light'].borderColor,
        },
      ]}  lightColor="#fff" darkColor="#111111">
<View style={styles.blockone} lightColor="#fff" darkColor="#111111">
  
    <Text style={styles.label} lightColor='#00000099'>

        {currencydata?.currency} Balance</Text>
    <Text style={styles.currency} lightColor='#E57F06'>{accounting.formatMoney(currencydata?.balance, currencydata?.symbol, 2)}</Text>
</View>
<Text style={{opacity:0.2, fontSize:19}} >|</Text>
<View style={styles.blocktwo} lightColor="#fff" darkColor="#111111">
    { readonly? (<Text style={styles.input} lightColor='#000000'>
    {accounting.formatMoney(convertedvalue, '',  2)}
    
    </Text>) : 
( <TextInput  textAlign="right"
  keyboardType="numeric"  
  maxLength={8}
  style={[
    styles.input,
    {
      color: Colors[colorScheme ?? 'light'].text,
    },
  ]} 
   placeholder="0"
   value={figure}
   onChangeText={(text) => { setfigure(text);  validateCurrency(text) }}
   />)
    }

    {/* */}
 <Text style={styles.input} lightColor='#000000'>{currencydata?.symbol}</Text>

  
</View>
    </View>
         {/* <Text style={{color:'red',textAlign:'right', fontFamily:'Satoshi', fontSize:13}}>two million naira</Text> */}
    </View>

  )
}

export default Converterblock

const styles = StyleSheet.create({
    mybalance:{
        padding:10,
        paddingVertical:13,
        borderWidth: 1,
        borderRadius: 5,
        gap: 1,
        flexDirection:'column',
    justifyContent:'center'

    },
    mybalancetwo:{
        gap: 10,
        flexDirection:'row',
        alignItems: 'center'

    },
    blockone:{
        width: '39%',
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
margin: 2,
fontSize:15,
    }

})