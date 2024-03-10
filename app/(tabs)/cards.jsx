import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useContext } from 'react'
import { UserData } from "@/components/Veecontext";
import { Link } from 'expo-router';
const cards = () => {

  const {setIsAuthenticated} = useContext(UserData)
  const logout = () => {
    setIsAuthenticated(false);
  };
  return (

    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
      <Text>cards</Text>
<Link href='/transaction'>Link</Link>
      <TouchableOpacity style={{padding: 10, backgroundColor: 'red'}}
      onPress={logout} >
        <Text>button</Text>
      </TouchableOpacity>
    </View>
  )
}

export default cards

const styles = StyleSheet.create({})