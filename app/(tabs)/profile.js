import { ScrollView, StyleSheet, Image, Pressable, TouchableOpacity, Vibration, FlatList, Dimensions, SafeAreaView } from 'react-native';
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { Text, View } from '@/components/Themed';
import { AntDesign, EvilIcons, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState, useContext } from 'react';
import { UserData } from '@/components/Veecontext';

const Profile = () => {
  const {othersCategory} = useContext(UserData)
  const {securityCategory} = useContext(UserData)
  const {financeCategory} = useContext(UserData)
  const {accountCategory  } = useContext(UserData)
  const colorScheme = useColorScheme();
  return (

   <View style={styles.container} lightColor="#fbfcfd" darkColor="#000" >
 
            <ScrollView style={styles.scrollgap}
      showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
      >

<Text style={styles.mytxt} lightColor='#888'>Account</Text>
<View style={[styles.fdscol,  {
              borderColor: Colors[colorScheme ?? 'light'].cardborderColor,
            },]} lightColor="#fff" darkColor="#000">
  <View style={styles.pdata}>
    {accountCategory.map(item => (
      <View style={styles.item} key={item.name}>
        <MaterialCommunityIcons name={item.iconName} size={21} color="#E57F06" />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    ))}
  </View>

</View>


<Text style={styles.mytxt} lightColor='#888'>Finances</Text>
<View style={[styles.fdscol,  {
              borderColor: Colors[colorScheme ?? 'light'].cardborderColor,
            },]} lightColor="#fff" darkColor="#000">
  <View style={styles.pdata}>
    {financeCategory.map(item => (
      <View style={styles.item} key={item.name}>
        <MaterialCommunityIcons name={item.iconName} size={21} color="#E57F06" />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    ))}
  </View>

</View>


<Text style={styles.mytxt} lightColor='#888'>Security</Text>
<View style={[styles.fdscol,  {
              borderColor: Colors[colorScheme ?? 'light'].cardborderColor,
            },]} lightColor="#fff" darkColor="#000">
  <View style={styles.pdata}>
    {securityCategory.map(item => (
      <View style={styles.item} key={item.name}>
        <MaterialCommunityIcons name={item.iconName} size={21} color="#E57F06" />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    ))}
  </View>

</View>


<Text style={styles.mytxt} lightColor='#888'>Others</Text>
<View style={[styles.fdscol,  {
              borderColor: Colors[colorScheme ?? 'light'].cardborderColor,
            },]} lightColor="#fff" darkColor="#000">
  <View style={styles.pdata}>
    {othersCategory.map(item => (
      <View style={styles.item} key={item.name}>
        <MaterialCommunityIcons name={item.iconName} size={21} color="#E57F06" />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    ))}
  </View>

</View>


        </ScrollView>
       
    </View>

  )
}

export default Profile

const styles = StyleSheet.create({

  container:{
    flex: 1,

    paddingTop:15,
paddingHorizontal: 15,
  },
  block:{
    padding:10,

    flex: 1,
  },
  fdscol:{
    padding: 8,
    paddingHorizontal: 15,
    marginVertical: 6,
    paddingBottom: 10,
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'space-between',
    borderRadius: 6,
    marginBottom: 28,
    borderWidth: 1,
    
  },
  pdata:{
    paddingVertical: 10,
gap:29,
    flexDirection: 'column'

  },
  item:{
    gap: 20,
    flexDirection:'row'
  },
  itemText:{
    fontFamily: 'Satoshimid',
    fontSize: 14
  },
  mytxt:{
    padding:4,
    fontFamily: 'Satoshimid',
    fontSize: 14,
    fontWeight: 800,
  }
})