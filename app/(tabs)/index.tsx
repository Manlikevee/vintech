import { ScrollView, StyleSheet, Image, Pressable, TouchableOpacity, Vibration } from 'react-native';
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import Balance from '@/components/Reusables/ui/Balance'
import ServiceList from '@/components/Servicelist'
import Blocks from '@/components/Blocks'
export default function TabOneScreen() {


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


  const colorScheme = useColorScheme();
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
          <Text style={styles.mytxt} lightColor="#1C274C"  >USD</Text>
        
          </View>
          <View lightColor="#fff" darkColor="#111111">
            <EvilIcons name='chevron-down' size={22}   color={Colors[colorScheme ?? "light"].text}/>
          </View>
        </View>
        </TouchableOpacity>
       
       {/* <TouchableOpacity>
        <View      style={[
        styles.currencyinput,
        {
          borderColor: Colors[colorScheme ?? 'light'].borderColor,
        },
      ]}  lightColor="#fff" darkColor="#111111">
        <MaterialIcons name='qr-code-scanner' size={20}   color={Colors[colorScheme ?? "light"].text}/>
        </View>
       </TouchableOpacity> */}
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
  gtext:{
fontSize: 14,
fontFamily: 'Satoshimid',
fontWeight: 'bold',
  },
  btext:{
    fontSize: 14,
    fontFamily: 'Satoshimid',
    fontWeight: 'bold',
  },

  scrollgap:{
gap: 15,
flex: 1,
flexDirection: 'column',
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
    padding: 8,
    marginVertical: 13,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between'
  },
  fdswidth:{
    backgroundColor: 'transparent',
    padding: 8,
    marginVertical: 3,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});
