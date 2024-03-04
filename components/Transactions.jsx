import { StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Text, View } from '@/components/Themed';
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import {AntDesign } from '@expo/vector-icons';

const Transactions = () => {
    const colorScheme = useColorScheme();

    const transactions = [
        {
          sender: "James Brown",
          date: "18th Feb, 2024",
          time: "23:21",
          amount: "+$1,400.32",
          type: "credit"
        },
        {
          sender: "James Brown",
          date: "19th Feb, 2024",
          time: "10:45",
          amount: "-$550.75",
          type: "debit"
        },
        {
          sender: "James Brown",
          date: "20th Feb, 2024",
          time: "15:30",
          amount: "+$2,000.00",
          type: "credit"
        },
        {
          sender: "James Brown",
          date: "21st Feb, 2024",
          time: "09:12",
          amount: "-$300.50",
          type: "debit"
        }
      ];
      

  return (

    <View style={[
        styles.mybalance,
        {
          borderColor: Colors[colorScheme ?? 'light'].borderColor,
        },
      ]}>
    {transactions.map((item, index) => (
    <>
    <TouchableOpacity darkColor='transparent' style={{flexDirection:'row', gap: 10, alignItems: 'center', marginBottom: 10}}>
        <View darkColor='transparent' style={{flexDirection:'row', gap: 3, flex:1, width: '70%', alignItems:'center'}}>
        <View darkColor='transparent' lightColor='transparent' style={{padding: 4, }}>
        {item.type === "credit" ? (
          <AntDesign name='download' size={16} color="#1BA019" style={styles.icon} />
        ) : (
          <AntDesign name='upload' size={16} color="red" style={styles.icon} />
        )}
    </View>
    <View darkColor='transparent' lightColor='transparent' style={{padding: 4, flex:1}}>
  
    <Text style={styles.title} lightColor="#1BA019">{item.amount}</Text>
    <Text style={styles.subtitle} lightColor="#393939" numberOfLines={1}>
            {item.type === "credit" ? `Received from ${item.sender}` : `Sent to ${item.sender}`}
          </Text>
 
    </View>
            </View>
            <View darkColor='transparent' lightColor='transparent' style={{padding: 4}}>
<Text  style={styles.subtitledate} lightColor="#393939" numberOfLines={1}>{item.date}</Text>
                </View>


        </TouchableOpacity>

        <View style={{ borderWidth: 1, opacity:0.1, marginBottom: 5, borderBottomColor: Colors[colorScheme ?? 'light'].borderColor,}} />
        </>
      ))}
      </View>
      
  )
}

export default Transactions

const styles = StyleSheet.create({
    mydatas:{

    },
    fr:{
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    mybalance:{
        borderWidth: 1,
        width: '100%',
        padding: 10,
  backgroundColor: 'transparent',
        borderRadius: 7,
    },
    container: {
        flexDirection: 'row',
        
        alignItems: 'center',
        backgroundColor: 'transparent',
      
      },

      textContainer: {
        flex: 1,
        backgroundColor: 'transparent'
      },
      title: {
        fontFamily: 'Satoshimid',
        fontSize: 13,
        fontWeight: '700',
        marginBottom: 3,
      },
      subtitle: {
        fontFamily: 'Satoshimid',
        fontSize: 13,
        color: '#777',
      },
      subtitledate: {
        fontFamily: 'Satoshi',
        fontSize: 12,
        color: '#666',
      },
})