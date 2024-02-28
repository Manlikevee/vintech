import { StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Text, View } from '@/components/Themed';
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { EvilIcons, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

const Blocks = ({ data }) => {
    const colorScheme = useColorScheme();
  return (
    <View lightColor="transparent" >
   {data.map((item, index) => (

        <TouchableOpacity style={[
            styles.mybalance,
            {
              borderColor: Colors[colorScheme ?? 'light'].borderColor,
            },
          ]} key={index} onPress={item.onPress}>
          <View style={styles.container}>
         <View style={styles.fr}>
         <SimpleLineIcons name={item.iconName} size={20} color="#646464" style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title} lightColor="#393939"  >{item.title} </Text>
              <Text style={styles.subtitle} lightColor="#00000099" >{item.subtitle}</Text>
            </View>
         </View>
  
            <View>
             <SimpleLineIcons name='arrow-right' size={13} color="#323232" style={styles.icon}/>
            </View>
          </View>
        </TouchableOpacity>

      ))}

    </View>
  )
}

export default Blocks

const styles = StyleSheet.create({
    fr:{
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    mybalance:{
        borderWidth: 1,
        width: '100%',
        padding: 15,
  marginBottom: 15,
  backgroundColor: 'transparent',

        borderRadius: 7,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
      
      },

      textContainer: {
        flex: 1,
        backgroundColor: 'transparent'
      },
      title: {
        fontFamily: 'Satoshimid',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 5,
      },
      subtitle: {
        fontFamily: 'Satoshi',
        fontSize: 13,
        color: '#555',
      },
})