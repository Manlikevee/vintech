import { EvilIcons, SimpleLineIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {  TouchableOpacity, ScrollView, SafeAreaView, SectionList, StatusBar, FlatList, StyleSheet, ImageBackground } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import Balance from '@/components/Reusables/ui/Balance';
import myimg from '../../assets/images/Topology-1.png';
const MyComponent = () => {
    const colorScheme = useColorScheme();
    const idTypeRef = useRef();
    const [figure, setFigure] = useState("");

  const transactions = [
    {
      type: 'credit',
      amount: 100.00,
      currency: 'USD'
    },
    {
      type: 'debit',
      amount: 50.00,
      currency: 'USD'
    },
    {
      type: 'currency exchange',
      amount: 200.00,
      currency: 'EUR',
      exchangedTo: 'USD'
    },
    {
        type: 'credit',
        amount: 100.00,
        currency: 'USD'
      },
      {
        type: 'debit',
        amount: 50.00,
        currency: 'USD'
      },
      {
        type: 'currency exchange',
        amount: 200.00,
        currency: 'EUR',
        exchangedTo: 'USD'
      },
      {
        type: 'credit',
        amount: 100.00,
        currency: 'USD'
      },
      {
        type: 'debit',
        amount: 50.00,
        currency: 'USD'
      },
      {
        type: 'cardfunding',
        amount: 50.00,
        currency: 'USD'
      },
      {
        type: 'cardfunding',
        amount: 50.00,
        currency: 'USD'
      },
      {
        type: 'currency exchange',
        amount: 200.00,
        currency: 'EUR',
        exchangedTo: 'USD'
      },
      {
        type: 'credit',
        amount: 100.00,
        currency: 'USD'
      },
      {
        type: 'debit',
        amount: 50.00,
        currency: 'USD'
      },
      {
        type: 'currency exchange',
        amount: 200.00,
        currency: 'EUR',
        exchangedTo: 'USD'
      }
  ];
  
  const openBottomSheet = (ref) => {
    // Close all previous bottom sheets before opening the new one

    ref.current.open();
  };

  const renderTransactionItem = ({ item }) => (
<TouchableOpacity onPress={() => {
  openBottomSheet(idTypeRef);
  setFigure(item);
}}>
    <View style= {[styles.item,  {
        borderColor: Colors[colorScheme ?? 'light'].cardborderColor,
      },] }
    
    
    lightColor="#fff" darkColor="#111111">
    <View  style={{flexDirection:'row', gap:10, alignItems:'center'}} lightColor="#fff" darkColor="#111111">
        
        {
            item.type == 'credit' ?
             (      <SimpleLineIcons name='cloud-upload' size={16} color='#27C200'  style={styles.icongreen}/>) :
             item.type == 'debit' ?
             (    <SimpleLineIcons name='cloud-download' size={16} color='#FF4F4F'  style={styles.iconred}/> ) : 
             item.type == 'cardfunding' ? (
                <SimpleLineIcons name='credit-card' size={16} color='#03285F'  style={styles.iconfunding}/> 
             ) :
             
             <SimpleLineIcons name='refresh' size={16} color='#0864ED'  style={styles.icon}/>
        }
  

        <View style={{width:'60%', backgroundColor:'transparent', gap:3}}>
        <Text style={styles.title} lightColor='#000000' numberOfLines={1}>{`${item.type}: ${item.amount} ${item.currency}`}</Text>
        <Text style={styles.subtitle} lightColor='#00000099'>21st Feb, 2024, 23:21</Text>
        </View>

    </View>
    <Text style={styles.amt}>2,00,000,000</Text>
    </View>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.header}>{title}</Text>
  );



  return (
    <View style={styles.container} lightColor="#fbfcfd" darkColor="#000">
    <SafeAreaView style={{ flex: 1 }}>
    
<ImageBackground  source={myimg} resizeMode="cover"  style={{minHeight:120, justifyContent:'center', backgroundColor:'transparent', padding:9, gap:5, marginBottom:30, borderWidth: 1,
 borderColor: Colors[colorScheme ?? 'light'].cardborderColor, borderRadius: 7
}}

>

<Text lightColor='#E57F06' style={{fontFamily:'Satoshimid', fontWeight:'600', marginBottom:0, paddingTop:10}}>Balance</Text>

<Text style={{fontSize:30, fontFamily:'SoraBold'}}>250,000  USD</Text>

<Text>Last Updated 10 Minutes Ago</Text>


</ImageBackground>
<ScrollView style={{flex:1, backgroundColor:'transparent'}}>

<FlatList
        data={transactions}
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTransactionItem}
        ListHeaderComponent={() => (
          <Text style={styles.header}>Transactions</Text>
        )}
      />
    

    <RBSheet ref={idTypeRef}>
        <View style={styles.bottomSheet}>
          <Text>ID Type Select sbbs sbaahhe ejehxhx hwhwhw sgsggws g {figure.amount}</Text>
          {/* Your ID type select component goes here */}
        </View>
      </RBSheet>
</ScrollView>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create ({
  option: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  bottomSheet: {
    padding: 16,
  },
  container: {
    flex: 1,

    paddingTop: 20,
    paddingHorizontal: 15,
  },
  amt:{
fontSize:13,
fontWeight:'700',
fontFamily:'Satoshimid'
  },
  icon:{
    backgroundColor:'#E6F0FD',
    padding:9,
    borderRadius:4
  },
  icongreen:{
backgroundColor:'#E4F9E0',
padding:9,
borderRadius:4
  },
  iconred:{
    backgroundColor:'#FFE5E5',
    padding:9,
    borderRadius:4
  },
  iconfunding:{
    backgroundColor:'#F5F7FA',
    padding:9,
    borderRadius:4
  },
  item: {
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
    padding: 14,
    borderRadius:6,
    marginVertical: 6,
    borderWidth: 1,
  },
  header: {
    fontSize: 16,
fontFamily:'Satoshimid',
    marginBottom: 8,
    fontWeight:'700'
  },
  title: {
    fontSize: 13,
    // fontFamily:'Soramid',
  },
  subtitle: {
    fontFamily:'Satoshi',
    fontSize: 13,

  },

});

export default MyComponent;
