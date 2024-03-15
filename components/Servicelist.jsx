import { StyleSheet, FlatList, Pressable} from 'react-native'
import React from 'react'
import { Text, View } from '@/components/Themed';
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';


const mylogin = (url) => {
  if(url){
    router.push(url);
  }

}
  
const data = [
  { name: 'Send', icon: 'arrow-up', url: '' },
  { name: 'Receive', icon: 'arrow-down', url: '' },
  { name: 'Swap', icon: 'retweet', url: '/transaction/currencyswap' },
  { name: 'More', icon: 'paperclip', url: '' },
];



const Servicelist = () => {
    const colorScheme = useColorScheme();
    
const renderItem = ({ item, index }) => (
    
    <View style={[styles.itemContainer ,          {
        borderColor: Colors[colorScheme ?? 'light'].borderColor,
      },]} lightColor="#fff" darkColor="#111111" >
      <Pressable
     style={styles.itemcenter}   
     onPress={() => mylogin(item?.url)}

      >
       
          <EvilIcons name={item.icon} size={30} color="#F0B673" style={styles.icon} />
          
    
        <Text style={styles.txt} lightColor="#1C274C" darkColor="#d4d3d3">{item.name}</Text>
      </Pressable>
      </View>
    );
  return (
    <View style={{     marginTop: 20, backgroundColor: 'transparent' }}>
   <FlatList
      data={data}
      scrollEnabled={false}
      numColumns={5}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.flatListContainer}
    />
    </View>
    
 

  )

}

export default Servicelist

const styles = StyleSheet.create({
itemcenter:{
    flex: 1,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',

},
icon:{
  marginTop:5
},
txt:{
fontSize: 14,
fontFamily: 'Satoshimid',
textAlign: 'center',
lineHeight:20,
marginBottom:5
},
myicon:{
padding: 10,

},
    itemContainer:{
        flex: 1,
        margin: 5,
        padding: 12,
        borderWidth: 1,
        gap: 3,
      
        borderRadius: 5,
 
        // backgroundColor: 'transparent',
        // elevation: 0,
        // shadowColor: '#717171',
        // shadowOffset: {
        //   width: 0,
        //   height: 1,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 1,
        // elevation: 1, // Android shadow
    }
})