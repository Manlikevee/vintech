import { ScrollView, StyleSheet, Image, Pressable, TouchableOpacity, Vibration, RefreshControl, FlatList, Dimensions, SafeAreaView, Button } from 'react-native';
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { Text, View } from '@/components/Themed';
import { AntDesign, EvilIcons, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState, useContext, useRef, useMemo, useEffect, useCallback } from 'react';
import { UserData } from '@/components/Veecontext';
import accounting from 'accounting';

import RBSheet from "react-native-raw-bottom-sheet";
import axios from 'axios';
import Converterblock from '../../components/Converterblock';
import { router } from 'expo-router';




export default function Page() {
  const [refreshing, setRefreshing] = useState(false);
  const colorScheme = useColorScheme();
  const {UserAccounts} = useContext(UserData)
  const {otherCurrencies} = useContext(UserData)
  const [figure, setFigure] =  useState('');
  const [activeConvertCurrency, setActiveConvertCurrency] = useState(otherCurrencies[0]);
  const refRBSheet = useRef();
  const [rateCard, setRatecard] =  useState(null);
  const {activeCurrency} = useContext(UserData);
  const [convertedvalue, setconvertedvalue] =  useState(0);
  const b = activeCurrency?.currency
  let url =  `https://api.exchangerate-api.com/v4/latest/${b}`

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

    const mylogin = () => {
      router.replace('/(auth)/');
    }

    useEffect(() => {
      // Filter UserAccounts to find a currency that is not the same as activeCurrency
      const convertCurrency = UserAccounts.find(account => account?.currency !== activeCurrency.currency);
  
      // Set activeConvertCurrency to the found currency
      setActiveConvertCurrency(convertCurrency);
      fetchDataOnClick(url)

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  
    // Function to handle currency change


     fetchDataOnClick = async (url) => {

        try {
          // Make the GET request using Axios
          const response = await axios.get(url);
      
          // If the request is successful, handle the data
       
          setRatecard(response.data)
        
          // You can update state or do any other action with the fetched data here
        } catch (error) {
          // If there's an error, handle it here
          console.error('Error fetching data:', error);
          // You can update state or show an error message to the user here
        }
      };

      const validateCurrency = (text) => {
        console.log(text)
        const currentrate = rateCard?.rates?.[activeConvertCurrency?.currency] 
        const convertedval = parseInt(currentrate) * parseInt(text) 
   
        setconvertedvalue(convertedval)
    
   
          
       
      };

    return (
        <View style={styles.container} lightColor="#fbfcfd" darkColor="#000" >
 <SafeAreaView style={{flex:1, backgroundColor:'transparent'}}>
        <ScrollView 
                refreshControl={
                  <RefreshControl refreshing={refreshing} onRefresh={onRefresh}
                  colors={['#E57F06']} // Use your primary color for the refresh indicator
                  tintColor={'#E57F06'} // iOS fallback color
                  progressBackgroundColor="#ffffff" // Background color on Android
                  
                  />
                }
  showsVerticalScrollIndicator={false} // Hide vertical scrollbar
  showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
  >
<View style={styles.scrollgap} lightColor='transparent'>
<View style={styles.spacebtw} lightColor='transparent'>
      <View>
      <TouchableOpacity>
              <View       style={[
              styles.currencyinput,
              {
                borderColor: Colors[colorScheme ?? 'light'].borderColor,
              },
            ]}  lightColor="#fff" darkColor="#111111">
              <View lightColor="#fff" darkColor="#111111">
              <Image
        source={activeCurrency.logo}
        style={{ width: 17, height: 17 , borderRadius: 50 }}
      />

      {/* <Image source={require('../../assets/images/ngn.png')} style={{ width: 18, height: 18 , borderRadius: 50}} /> */}
                </View> 
                <View lightColor="#fff" darkColor="#111111">
                <Text style={styles.mytxt} lightColor="#1C274C"  >{activeCurrency.currency}</Text>
              
                </View>
                <View lightColor="#fff" darkColor="#111111">
                  <EvilIcons name='chevron-down' size={22}   color={Colors[colorScheme ?? "light"].text}/>
                </View>
              </View>
              </TouchableOpacity>
      </View>

      <View lightColor='transparent'>
          <TouchableOpacity>
                  <View       style={[
                  styles.currencyinput,
                  {
                    borderColor: Colors[colorScheme ?? 'light'].borderColor,
                  },
                ]}  lightColor="#fff" darkColor="#111111">

                    <View lightColor="#fff" darkColor="#111111">
                      <Ionicons name='swap-vertical' color='#1C274C' style={styles.myicon} />
                  
                  
                    </View>
              
                  </View>
                  </TouchableOpacity>
          </View>

          <View lightColor='transparent'>
          <TouchableOpacity>
                  <View       style={[
                  styles.currencyinput,
                  {
                    borderColor: Colors[colorScheme ?? 'light'].borderColor,
                  },
                ]}  lightColor="#fff" darkColor="#111111">
                  <View lightColor="#fff" darkColor="#111111">
                  <Image
            source={activeConvertCurrency?.logo}
            style={{ width: 17, height: 17 , borderRadius: 50 }}
          />

          {/* <Image source={require('../../assets/images/ngn.png')} style={{ width: 18, height: 18 , borderRadius: 50}} /> */}
                    </View> 
                    <View lightColor="#fff" darkColor="#111111">
                    <Text style={styles.mytxt} lightColor="#1C274C"  >{activeConvertCurrency?.currency}</Text>
                  
                    </View>
                    <View lightColor="#fff" darkColor="#111111">
                      <EvilIcons name='chevron-down' size={22}   color={Colors[colorScheme ?? "light"].text}/>
                    </View>
                  </View>
                  </TouchableOpacity>
          </View>
</View>

{/* <View>

<Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
</View> */}
<View style={{gap:6}} lightColor='transparent'>
<Text>From</Text>
<Converterblock  figure={figure} setfigure={setFigure} validateCurrency={validateCurrency} convertedvalue={convertedvalue}/>
</View>

<View style={{gap:6}} lightColor='transparent'> 
<Text>To</Text>
<Converterblock currencyid={activeConvertCurrency?.id} convertedvalue={convertedvalue} amount={20} readonly={true} figure={figure} setfigure={setFigure} />
<Text style={{fontFamily:'Satoshi', fontSize: 13, lineHeight:20}} lightColor='#00000099'> {activeCurrency?.symbol}&nbsp;1 is equivalent to &nbsp;{accounting.formatMoney(rateCard?.rates?.[activeConvertCurrency?.currency],  activeConvertCurrency?.symbol)}

 </Text>
</View>




<View style={{gap:6}} lightColor='transparent'>
<Text> Summary </Text>
<View    style={[
        styles.mybalance,
        {
          borderColor: Colors[colorScheme ?? 'light'].borderColor,
        },
      ]}  lightColor="#fff" darkColor="#111111">

<View style={{gap:15}}>
      <View style={styles.summarytab}>
          <Text Text style={styles.lbl} lightColor='#1C274C99'>Expected swap</Text>
          <Text style={styles.value} lightColor='#1C274C'>{accounting.formatMoney(figure, activeCurrency?.symbol)}</Text>
        </View>

        <View style={styles.summarytab}>
        <Text Text style={styles.lbl} lightColor='#1C274C99'>Transaction fee</Text>
        <Text style={styles.value} lightColor='#1C274C'>{activeCurrency?.symbol}0.00</Text>
         
        </View>

        <View style={styles.summarytab}>
        <Text Text style={styles.lbl} lightColor='#1C274C99'>Expected total</Text>
        <Text style={styles.value} lightColor='#1C274C'>{accounting.formatMoney(convertedvalue, activeConvertCurrency?.symbol)}</Text>
   
        </View>
</View>


</View>
</View>
</View>



{/* from and to block */}






<RBSheet
        dragFromTopOnly
        ref={refRBSheet}
        height={375}
        openDuration={750}
        closeOnDragDown={true}
        closeOnPressMask={true}
   
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <ScrollView>
        <TouchableOpacity onPress={() => fetchDataOnClick(url)}>
            <Text>Hello</Text>
        <Text>Hello</Text>
            </TouchableOpacity>
   
        
        </ScrollView>

      </RBSheet>
</ScrollView>
<TouchableOpacity style={{padding: 15, backgroundColor:'#E57F06', borderRadius: 7}}  onPress={mylogin}>
    <Text style={{color: 'white', textAlign:'center'}}>Proceed</Text>
    </TouchableOpacity>
</SafeAreaView>
  </View>
    )
}

const styles = StyleSheet.create({

    container:{
      flex: 1,
  
      paddingTop:15,
  paddingHorizontal: 15,
    },
    lbl:{
fontFamily:'Satoshi',
fontSize:14,
lineHeight:20
    },
    value:{
      // fontFamily:'Satoshimid',
      lineHeight:20,
      fontSize:14,
    },
    mybalance:{
      padding:10,
      borderWidth: 1,
      borderRadius: 5,
      gap: 10,
      flexDirection:'row',
      alignItems: 'center'

  },
  summarytab:{
padding: 4,
paddingVertical:5,
flexDirection:'row',
justifyContent:'space-between',
width:'100%',
alignItems:'center'
  },
    scrollgap:{
      gap: 35,

  paddingTop:20
  
        },
    block:{
      padding:10,
  
      flex: 1,
    },
    currencyinput:{
      padding: 11,
      gap:9,
      borderRadius: 9,
      borderWidth: 1,
      borderColor:  '#1C274C33',
      flexDirection: 'row',
      alignItems: 'center'
        },
        spacebtw:{
          flexDirection:'row',
          gap: 20,
          alignItems:'center',
          justifyContent:'space-between'
        },
        mytxt:{
          fontFamily: 'Satoshimid',
          fontSize: 13,
          fontWeight: '400'
        },
        fd:{
          flexDirection: 'row',
          gap: 20,
          justifyContent: 'space-between'
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
      backgroundColor:'transparent',
  gap:29,
      flexDirection: 'column'
  
    },
    item:{
      gap: 20,
      flexDirection:'row',
      backgroundColor:'transparent'
    },
    myicon:{
      fontFamily: 'Satoshimid',
      fontSize: 19
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