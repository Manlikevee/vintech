import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useContext } from 'react'
import { UserData } from "@/components/Veecontext";
const cards = () => {

  const {setIsAuthenticated} = useContext(UserData)
  const logout = () => {
    setIsAuthenticated(false);
  };
  return (

    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
      <Text>cards</Text>

      <TouchableOpacity style={{padding: 10, backgroundColor: 'red'}}
      onPress={logout} >
        <Text>button</Text>
      </TouchableOpacity>
    </View>
  )
}

export default cards

const styles = StyleSheet.create({})