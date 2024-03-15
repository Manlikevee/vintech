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
import { useState, useContext } from 'react';
import { UserData } from '@/components/Veecontext';
import Currency from '@/components/Bottomsheets/Currency';
import Carousel from 'react-native-carousel-banner';
import { router } from "expo-router";
import mg2 from '@/assets/images/mg(2).jpg'
import mg3 from '@/assets/images/mg(3).jpg'



export default function TabOneScreen() {


  const {isOpen} = useContext(UserData)
  const {handleButtonPress} = useContext(UserData)
  const {blockData} = useContext(UserData)
  const {data2} = useContext(UserData)
  const {data1} = useContext(UserData)
  const {toggleAppearanceMode} = useContext(UserData)

  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / screenWidth);
    setCurrentPage(page);
  };

const pushtopage =() =>{
  router.push("/transaction/alltransactions");
}




  const screenWidth = Dimensions.get('window').width;
  const colorScheme = useColorScheme();

  const DATA = [
'https://raw.githubusercontent.com/Manlikevee/vvimg/main/banner%20(1).jpg',
'https://raw.githubusercontent.com/Manlikevee/vvimg/main/banner%20(2).jpg',
'https://raw.githubusercontent.com/Manlikevee/vvimg/main/banner%20(4).jpg',
'https://raw.githubusercontent.com/Manlikevee/vvimg/main/banner%20(3).jpg',
'https://raw.githubusercontent.com/Manlikevee/vvimg/main/banner%20(5).jpg',
'https://raw.githubusercontent.com/Manlikevee/vvimg/main/banner%20(6).jpg',
'https://raw.githubusercontent.com/Manlikevee/vvimg/main/banner%20(7).jpg',
'https://raw.githubusercontent.com/Manlikevee/vvimg/main/banner%20(8).jpg',
'https://raw.githubusercontent.com/Manlikevee/vvimg/main/banner%20(9).jpg',

  ];

  
  return (
    <View style={[StyleSheet.absoluteFill,{flex:1,
      backgroundColor: isOpen ? '#ddd' : 'transparent',
       opacity: isOpen ?  0.1 : 1,
       pointerEvents: isOpen ? 'none' : 'auto',
       }]}  darkColor="#000">
    <View style={styles.container} lightColor="#fbfcfd" darkColor="#000" >
      <ScrollView style={styles.scrollgap}
      showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
      >

        <View style={styles.fd} lightColor="#fbfcfd" darkColor="#000">
<View style={{ width: '29%'}} lightColor="transparent" darkColor="transparent">
<Currency/>
</View>


       
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

<View style={{    backgroundColor: 'transparent',
    padding: 1,
    marginVertical: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',

  }} lightColor="transparent" darkColor="#000">

<Blocks data={blockData} />

</View>


<View style={[styles.fdscol,  {
              borderColor: Colors[colorScheme ?? 'light'].cardborderColor,
            },]} lightColor="#fff" darkColor="#111111">
<View style={styles.fdstransparent} lightColor="#transparent" darkColor="transparent">
  <Text style={styles.gtext} lightColor="#00000099" darkColor="#ccc" onPress={handleButtonPress}>Transactions</Text>
  <Text style={styles.btext} lightColor="#E57F06" darkColor="#E57F06" onPress={pushtopage}>See all</Text>
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
        onScroll={handleScroll}
        scrollEventThrottle={200}
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

      <View style={styles.pagination}>
          {[...Array(2)].map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setCurrentPage(index);
                // You might need to scroll to the correct position programmatically
              }}
              style={[
                styles.paginationIndicator,
                currentPage === index && styles.activePaginationIndicator,
              ]}
            />
          ))}
        </View>


</View>

<View style={{paddingBottom: 20}}>
<Carousel data={DATA} roundedSize={5} height={100} />
</View>


      </ScrollView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
paddingTop:15,
paddingHorizontal: 15,
flex: 1,

    
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: 'transparent'
  },
  paginationIndicator: {
    width: 13,
    height: 3,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activePaginationIndicator: {
    backgroundColor: '#F0B673',
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
