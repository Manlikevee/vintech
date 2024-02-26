import { StyleSheet } from 'react-native'
import { Text, View } from '@/components/Themed'
import React from 'react'

const Avatar = () => {
  return (
    <View style={styles.ava} lightColor="#fff" darkColor="#1d1e22">
      <Text style={styles.avatext} lightColor="#000" darkColor="#ffffff99">VO</Text>
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