import { StyleSheet } from 'react-native'
import { Text, View } from '@/components/Themed'
import React from 'react'

const Avatar = () => {
  return (
    <View style={{flexDirection:'row', gap: 10}} darkColor='transparent'>
    
         <View style={styles.ava} lightColor="#fff" darkColor="#1d1e22">
     <Text style={styles.avatext} lightColor="#000" darkColor="#ffffff99">VO</Text>
   </View>
   <View darkColor='transparent'>
<Text style={{    fontSize: 13,
    }} lightColor="#000" darkColor="#ffffff99">Hello Vee</Text>
<Text style={{    fontSize: 11, fontFamily: 'Satoshimid',
    color: '#525452', fontWeight: '600'}}>Welcome Lets Make Payments</Text>
</View>
    </View>

  )
}

export default Avatar

const styles = StyleSheet.create({
    ava:{
        alignItems: 'center',
        justifyContent: 'center',
        color: '#E57F06',
        fontFamily: 'Satoshimid',
        fontWeight: '100',
        padding:6,
        marginLeft:10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor:  '#1C274C33'
      },

    avatext:{

        fontFamily: 'Satoshimid',
        fontWeight: '100',
        padding:1,

      },
})