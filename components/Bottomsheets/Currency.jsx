
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Switch,
  useWindowDimensions,
  Image,
  TouchableOpacity
} from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { Text, View } from '@/components/Themed';
import { useRef, useState, useCallback, useContext, useMemo } from "react";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import accounting from 'accounting';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetBackdrop
} from "@gorhom/bottom-sheet";
import { UserData } from '@/components/Veecontext';
const Currency = () => {
    
  
    const [darkmode, setDarkmode] = useState(false);
    const [device, setDevice] = useState(false);
    const { width } = useWindowDimensions();
    const [theme, setTheme] = useState("dim");
    const {isOpen} = useContext(UserData)
    const {handleChangeCurrency} = useContext(UserData)
    const {UserAccounts} = useContext(UserData)
    const {activeCurrency} = useContext(UserData)
    const {setIsOpen} = useContext(UserData)
    const colorScheme = useColorScheme();

    const bottomSheetModalRef = useRef(null);
  
    const snapPoints = ["30%","45%",  "50%", "70%" ];

    function handlePresentModal() {
        bottomSheetModalRef.current?.present();
        setTimeout(() => {
          setIsOpen(true);
        }, 100);
      }
    
 

      const renderBackdrop = useCallback(
        (props) => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={1}
            appearsOnIndex={1}
            backgroundColor="rgba(0, 0, 0, 0.5)" 
          />
        ),
        []
      );

  return (
 
     <View
      style={[StyleSheet.absoluteFill, { backgroundColor: isOpen ? 'transparent' : 'transparent' }]}
      >
      
        <TouchableOpacity
        onPress={() => handlePresentModal(2)}>
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

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={2}
          backdropComponent={renderBackdrop}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 10, 
            backgroundColor: Colors[colorScheme ?? 'light'].tabtop,
          }}
          onDismiss={() => setIsOpen(false)}
          handleComponent={() => (
            <View style={[styles.draggableHandle, { backgroundColor: Colors[colorScheme ?? 'light'].text,}]}>
              {/* Your custom handle content here */}
            </View>
          )}
          style={{ flex: 1, }} // Set flex to 1
        >
          <View  style={{ flex: 1, padding: 10 }}>
          <Text style={[styles.title, {  borderBottomWidth: 1, paddingBottom: 10,
         borderColor: Colors[colorScheme ?? 'light'].borderColor,  
        },
           ]}>
          Accounts
            </Text>
            <BottomSheetScrollView style={styles.contentContainer} >
<View style={{flexDirection: 'column', gap: 10, padding: 15}} darkColor="transparent">
  <Text style={{textAlign:'center', fontFamily: 'Satoshi'}}>
  Choose your preferred currency from the options below to view your account balances and transactions in the selected currency.
  </Text>
{UserAccounts.map((currency) => (
        <TouchableOpacity
          key={currency.id}
          style={[
            styles.currencyButton,
            {
              borderColor: Colors[colorScheme ?? 'light'].borderColor,
              backgroundColor: activeCurrency && activeCurrency.id === currency.id ? Colors[colorScheme ?? 'light'].curact : 'transparent', // Conditionally apply background color
            },
          ]}
        
          onPress={() => handleChangeCurrency(currency)}
        >
          <View style={{flexDirection:'row', gap: 15, backgroundColor:'transparent', alignItems: 'center'}}>
          <Image
  source={currency.logo}
  style={{ width: 22, height: 22 , borderRadius: 50 }}
/>
          <View style={{flex: 1, flexDirection: 'column', gap: 3}} lightColor="transparent" darkColor="transparent">
          <Text style={{fontSize: 13, fontFamily:'Satoshimid' }} lightColor="#00000099" darkColor="#ccc">{currency.shortname}</Text>
          <Text style={{fontSize: 15, fontWeight:'500' }} lightColor="#000000" darkColor="#fff">{currency.name}</Text>
     
          </View>

          <View style={{alignItems:'flex-end', justifyContent:'center'}} lightColor="transparent" darkColor="transparent">
          <Text style={{fontFamily:'Satoshimid', fontSize:13, lineHeight:21}} lightColor="#1C274C"> 
            {accounting.formatMoney(currency?.balance, currency?.symbol)}
          </Text>
          </View>

          </View>

     
        
        </TouchableOpacity>
      ))}
      <TouchableOpacity
          style={[
            styles.currencyButton,
            {
              borderColor: Colors[colorScheme ?? 'light'].borderColor,
 
            },
          ]}
        
         
        >
          <View style={{flexDirection:'row', gap: 15, backgroundColor:'transparent', alignItems: 'center'}}>

          <View style={{flex: 1, flexDirection: 'column', gap: 3}} lightColor="transparent" darkColor="transparent">
      
          <Text style={{fontSize: 15, fontWeight:'500', textAlign:'center' }} lightColor="#000000" darkColor="#fff">+ Add New Currency</Text>
     
          </View>

   

          </View>

     
        
        </TouchableOpacity>
</View>
          </BottomSheetScrollView>
          </View>
       
        </BottomSheetModal>
      </View>

  )
}

export default Currency
const styles = StyleSheet.create({
  container: {
paddingTop:15,
paddingHorizontal: 15,
flex: 1,

    
  },
  draggableHandle: {
    backgroundColor: 'blue', // Change the color of the draggable part
    width: 40,
    padding: 3,
    justifyContent: 'center', // Adjust width as needed
    height: 1, // Adjust height as needed
    borderRadius: 2, // Adjust border radius as needed
    alignSelf: 'center',
    marginTop: 10, // Align the handle in the center
    marginBottom: 10, // Adjust margin as needed
  },

  icon:{
    backgroundColor: 'transparent',
  paddingVertical: 15,
  paddingHorizontal: 14,
  borderWidth: 1,
  borderRadius: 9,
  alignItems: 'center',
  justifyContent:'center',
  textAlign: 'center'

},
  txt:{
    fontSize: 13,
    fontFamily: 'Satoshimid',
    textAlign: 'center',
    lineHeight:20,
    marginBottom:5
    },
    myicon:{
    padding: 10,
    
    },
  myred:{
padding: 5,

  },
  myblue:{
    padding: 2
  },
  gtext:{
fontSize: 14,
fontFamily: 'Satoshimid',
fontWeight: 'bold',
  },
  btext:{
    fontSize: 14,
    fontFamily: 'Satoshimid',
  },
  
  currencyButton:{
padding: 17,
borderWidth: 1,
borderRadius: 5,
marginTop: 10,
  },

  scrollgap:{
gap: 15,
flex: 1,
flexDirection: 'column',
paddingBottom: 40
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'Satoshimid',
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  fsty:{
    fontFamily: 'Satoshi',

    fontWeight: 'bold',
  },
  fstys:{
    color: '#E57F06',
    fontFamily: 'Satoshimid',
    fontWeight: '100',
  },
  currencyinput:{
padding: 8,
gap:9,
borderRadius: 9,
borderWidth: 1,
borderColor:  '#1C274C33',
flexDirection: 'row'
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
  fds:{
    padding: 9,
    marginVertical: 13,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    borderRadius: 7
  },
  fdscol:{
    padding: 8,
    paddingHorizontal: 15,
    marginVertical: 6,
    paddingBottom: 20,
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'space-between',
    borderRadius: 6,
    marginBottom: 28,
    borderWidth: 1,
    
  },
  fdstransparent:{
  
    marginVertical: 10,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    borderRadius: 7
  },
  fdswidth:{
    backgroundColor: 'transparent',
    padding: 8,
    marginVertical: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',

  },
  contentContainer:{
    flex: 1,
  }
});
