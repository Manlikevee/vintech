import { ScrollView, StyleSheet, Image, Pressable, TouchableOpacity, Vibration, FlatList, Dimensions } from 'react-native';
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { AntDesign, EvilIcons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Balance from '@/components/Reusables/ui/Balance'
import ServiceList from '@/components/Servicelist'
import Blocks from '@/components/Blocks'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Transactions from '@/components/Transactions'
import { useState } from 'react';
import { Appearance } from 'react-native';


export default function TabOneScreen() {


  const [appearanceMode, setAppearanceMode] = useState('automatic');



  const handleButtonPress = () => {
    // Vibrate for 500ms
    Vibration.vibrate(20);
  };




  const blockData = [
    {
      title: "Complete your KYC",
      subtitle: "For safe and seamless money transfers.",
      iconName: "doc",
      onPress: () => console.log('Pressed Block 1'),
    },
    {
      title: "Deposit into account",
      subtitle: "Make a deposit with confidence.",
      iconName: "briefcase",
      onPress:  handleButtonPress,
    },
    {
      title: "Set-up virtual card",
      subtitle: "Establish your virtual card in a few steps",
      iconName: "credit-card",
      onPress:  handleButtonPress,
    },
    {
      title: "Link bank account",
      subtitle: "Connect your bank account effortlessly.",
      iconName: "wallet",
      onPress: handleButtonPress,
    },
    // Add more block data as needed
  ];

  const data1 = [
    { key: '1', text: 'Item 1', name: 'Airtime', icon: 'shake' },
    { key: '2', text: 'Item 2', name: 'Bills', icon: 'bank' },
    { key: '3', text: 'Item 3', name: 'Betting', icon: 'dribbble' },
    { key: '4', text: 'Item 1', name: 'Reffer', icon: 'switcher' },
    { key: '5', text: 'Item 2', name: 'Education', icon: 'book' },
    { key: '6', text: 'Item 3', name: 'Transportation', icon: 'car' },
    { key: '7', text: 'Item 2', name: 'Power', icon: 'bulb1' },
    { key: '8', text: 'Item 3', name: 'Investment', icon: 'linechart' },
  ];

  const data2 = [
    { key: '1', text: 'Item 1', name: 'Booking', icon: 'airplane' },
    { key: '2', text: 'Item 2', name: 'Budgeting', icon: 'calculator-variant-outline' },
    { key: '3', text: 'Item 3', name: 'Scheduler', icon: 'send-clock-outline' },
    { key: '4', text: 'Item 1', name: 'Charity', icon: 'charity' },
    { key: '5', text: 'Item 2', name: 'Debit Card', icon: 'credit-card-outline' },
    { key: '6', text: 'Item 3', name: 'Scan To Pay', icon: 'line-scan' },
    { key: '7', text: 'Item 2', name: 'Nearby Pos', icon: 'map-check-outline' },
    { key: '8', text: 'Item 3', name: 'Safe Lock', icon: 'safe' },
  ];

  const screenWidth = Dimensions.get('window').width;
  const colorScheme = useColorScheme();


  const toggleAppearanceMode = () => {
    if (appearanceMode === 'light') {
      Appearance.setColorScheme('dark');
      setAppearanceMode('dark');
    } else if (appearanceMode === 'dark') {
      Appearance.setColorScheme('light');
      setAppearanceMode('light');
    } else {
      // If appearanceMode is null or undefined (i.e., automatic), you can set it to a default value
      Appearance.setColorScheme('dark'); // Or any other default value
      setAppearanceMode('dark');
    }
  };
  const imageSource = { uri: 'https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.png' };
  return (
    <View style={styles.container} lightColor="#fbfcfd" darkColor="#000">
      <ScrollView style={styles.scrollgap}
      showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
      >

        <View style={styles.fd} lightColor="#fbfcfd" darkColor="#000">
<TouchableOpacity>
        <View       style={[
        styles.currencyinput,
        {
          borderColor: Colors[colorScheme ?? 'light'].borderColor,
        },
      ]}  lightColor="#fff" darkColor="#111111">
        <View lightColor="#fff" darkColor="#111111">
        {/* <Image
          style={{
            width: 20, // Or use '100%' for responsive width
            height: 20,
            resizeMode: 'contain', // Or other resize modes
   
          }}
        
        source={imageSource} /> */}

<Image source={require('../../assets/images/ngn.png')} style={{ width: 18, height: 18 , borderRadius: 50}} />
          </View> 
          <View lightColor="#fff" darkColor="#111111">
          <Text style={styles.mytxt} lightColor="#1C274C"  >NGN</Text>
        
          </View>
          <View lightColor="#fff" darkColor="#111111">
            <EvilIcons name='chevron-down' size={22}   color={Colors[colorScheme ?? "light"].text}/>
          </View>
        </View>
        </TouchableOpacity>
       
       <TouchableOpacity
       onPressIn={toggleAppearanceMode}
       >
        <View      style={[
        styles.currencyinput,
        {
          borderColor: Colors[colorScheme ?? 'light'].borderColor,
        },
      ]}  lightColor="#fff" darkColor="#111111">
        <MaterialIcons name='qr-code-scanner' size={20}   color={Colors[colorScheme ?? "light"].text}/>
        </View>
       </TouchableOpacity>
        </View>

 <Balance/>

<ServiceList/>

<View style={styles.fds} lightColor="#fbfcfd" darkColor="#000">
  <Text style={styles.gtext} lightColor="#00000099" darkColor="#ccc" onPress={handleButtonPress}>Get started</Text>
  <Text style={styles.btext} lightColor="#E57F06" darkColor="#E57F06">0/4</Text>
</View>

<View style={styles.fdswidth} lightColor="transparent" darkColor="#000">

<Blocks data={blockData} />

</View>


<View style={[styles.fdscol,  {
              borderColor: Colors[colorScheme ?? 'light'].cardborderColor,
            },]} lightColor="#fff" darkColor="#111111">
<View style={styles.fdstransparent} lightColor="#transparent" darkColor="transparent">
  <Text style={styles.gtext} lightColor="#00000099" darkColor="#ccc" onPress={handleButtonPress}>Transactions</Text>
  <Text style={styles.btext} lightColor="#E57F06" darkColor="#E57F06">See all</Text>
</View>

<Transactions/>

</View>


<View style={[styles.fdscol,  {
              borderColor: Colors[colorScheme ?? 'light'].cardborderColor,
            },]} lightColor="#fff" darkColor="#111111">
<View style={styles.fdstransparent} lightColor="#transparent" darkColor="transparent">
  <Text style={styles.gtext} lightColor="#00000099" darkColor="#ccc" >Shortcuts</Text>

</View>





<ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >

        <View style={{ width: screenWidth * 0.848, backgroundColor:'transparent' }}>
          <FlatList
            data={data1}
            numColumns={4}
            scrollEnabled={false}
            style={{flexGrow:0}}
            columnWrapperStyle={{gap:6}}
            contentContainerStyle={{gap:6}}
            renderItem={({ item }) => 
          <View style={{flex: 1, width:'100%', backgroundColor:'transparent', padding: 4, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap:5 }}>
          <AntDesign name={item.icon} size={22} color="#F0B673" style={[styles.icon,      {
        borderColor: Colors[colorScheme ?? 'light'].borderColor, backgroundColor: Colors[colorScheme ?? 'light'].micon,
      },]} />
          
    
          <Text numberOfLines={1} style={styles.txt} lightColor="#1C274C" darkColor="#d4d3d3">{item.name}</Text>
            </View>
          }
          />
        </View>
        <View style={{ width: screenWidth * 0.848, backgroundColor: 'transparent' }}>
          <FlatList
          scrollEnabled={false}
          numColumns={4}
            data={data2}
            renderItem={({ item }) => 
            
            <View style={{flex: 1, width:'100%', backgroundColor:'transparent', padding: 4, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap:5 }}>
            <MaterialCommunityIcons name={item.icon} size={22} color="#F0B673" style={[styles.icon,      {
          borderColor: Colors[colorScheme ?? 'light'].borderColor, backgroundColor: Colors[colorScheme ?? 'light'].micon,
        },]} />
            
      
            <Text numberOfLines={1} style={styles.txt} lightColor="#1C274C" darkColor="#d4d3d3">{item.name}</Text>
              </View>
          
          }
          />
        </View>
      </ScrollView>



</View>



      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
paddingTop:15,
paddingHorizontal: 15,
flex: 1,

    
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

  scrollgap:{
gap: 15,
flex: 1,
flexDirection: 'column',
paddingBottom: 40
  },
  title: {
    fontSize: 20,
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

  }
});
