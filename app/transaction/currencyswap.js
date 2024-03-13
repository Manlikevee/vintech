import { ScrollView, StyleSheet, Image, Pressable, TouchableOpacity, Vibration, FlatList, Dimensions, SafeAreaView, Button } from 'react-native';
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { Text, View } from '@/components/Themed';
import { AntDesign, EvilIcons, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState, useContext, useRef, useMemo, useEffect } from 'react';
import { UserData } from '@/components/Veecontext';

import RBSheet from "react-native-raw-bottom-sheet";
import axios from 'axios';
import Converterblock from '../../components/Converterblock';




export default function Page() {
  const colorScheme = useColorScheme();
  const {UserAccounts} = useContext(UserData)
  const [activeConvertCurrency, setActiveConvertCurrency] = useState(null);
    const refRBSheet = useRef();
    const {activeCurrency} = useContext(UserData)
    const b = activeCurrency?.currency
    const url = `https://api.exchangerate-api.com/v4/latest/${b}`




    useEffect(() => {
      // Filter UserAccounts to find a currency that is not the same as activeCurrency
      const convertCurrency = UserAccounts.find(account => account?.currency !== activeCurrency.currency);
  
      // Set activeConvertCurrency to the found currency
      setActiveConvertCurrency(convertCurrency);
  console.log()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  
    // Function to handle currency change


     fetchDataOnClick = async (url) => {
        try {
          // Make the GET request using Axios
          const response = await axios.get(url);
      
          // If the request is successful, handle the data
          console.log(response.data);
          // You can update state or do any other action with the fetched data here
        } catch (error) {
          // If there's an error, handle it here
          console.error('Error fetching data:', error);
          // You can update state or show an error message to the user here
        }
      };

    return (
        <View style={styles.container} lightColor="#fbfcfd" darkColor="#000" >
 <SafeAreaView style={{flex:1, backgroundColor:'transparent'}}>
        <ScrollView 
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
<Converterblock/>
</View>

<View style={{gap:6}} lightColor='transparent'> 
<Text>To</Text>
<Converterblock currencyid={activeConvertCurrency?.id} amount={20} readonly={true} />
</View>

<Text> $1 is equivalent to ₦1,823.94995117 </Text>


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
          <Text style={styles.value} lightColor='#1C274C'>$1000.00</Text>
        </View>

        <View style={styles.summarytab}>
        <Text Text style={styles.lbl} lightColor='#1C274C99'>Transaction fee</Text>
        <Text style={styles.value} lightColor='#1C274C'>$6.00</Text>
         
        </View>

        <View style={styles.summarytab}>
        <Text Text style={styles.lbl} lightColor='#1C274C99'>Expected swap</Text>
        <Text style={styles.value} lightColor='#1C274C'>₦1,813,006.25</Text>
   
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
<TouchableOpacity style={{padding: 15, backgroundColor:'#E57F06', borderRadius: 7}} >
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
paddingVertical:6,
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
      padding: 8,
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