import { EvilIcons, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import {
  useState,
  useContext,
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import {  TouchableOpacity, ScrollView, SafeAreaView, SectionList, StatusBar, FlatList, StyleSheet, ImageBackground, Image } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import Balance from '@/components/Reusables/ui/Balance';
import myimg from '../../assets/images/Vector.png';
import myimg2 from '../../assets/images/EmptyState (1).png';
import myimg3 from '../../assets/images/EmptyState.png';
import myimg4 from '../../assets/images/MOney.png';
import { UserData } from "@/components/Veecontext";
import accounting from "accounting";
const MyComponent = () => {
    const colorScheme = useColorScheme();
    const idTypeRef = useRef();
    const [figure, setFigure] = useState("");
    const { activeCurrency } = useContext(UserData);
    const [visibleBalance, setvisibleBalance] = useState(false);
    const setfuncvisible = () => {
      setvisibleBalance(!visibleBalance)
     
    }  
  const transactions = 
  [
    {
        "type": "debit",
        "amount": 833566.58,
        "currency": "NGN"
    },
    {
        "type": "credit",
        "amount": 243107.4,
        "currency": "USD"
    },
    {
        "type": "debit",
        "amount": 174376.06,
        "currency": "NGN"
    },
    {
        "type": "exchange",
        "amount": 696788.36,
        "currency": "NGN"
    },
    {
        "type": "exchange",
        "amount": 637312.97,
        "currency": "USD"
    },
    {
        "type": "card funding",
        "amount": 106090.29,
        "currency": "NGN"
    },
    {
        "type": "credit",
        "amount": 834864.21,
        "currency": "USD"
    },
    {
        "type": "credit",
        "amount": 121924.9,
        "currency": "USD"
    },
    {
        "type": "credit",
        "amount": 174312.87,
        "currency": "GBP"
    },
    {
        "type": "credit",
        "amount": 407635.06,
        "currency": "GBP"
    },
    {
        "type": "credit",
        "amount": 5615.69,
        "currency": "NGN"
    },
    {
        "type": "debit",
        "amount": 453091.69,
        "currency": "NGN"
    },
    {
        "type": "card funding",
        "amount": 639029.14,
        "currency": "NGN"
    },
    {
        "type": "card funding",
        "amount": 505154.75,
        "currency": "NGN"
    },
    {
        "type": "credit",
        "amount": 556664.22,
        "currency": "NGN"
    },
    {
        "type": "exchange",
        "amount": 327618.9,
        "currency": "NGN"
    },
    {
        "type": "debit",
        "amount": 441951.08,
        "currency": "GBP"
    },
    {
        "type": "credit",
        "amount": 714196.02,
        "currency": "USD"
    },
    {
        "type": "credit",
        "amount": 498868.28,
        "currency": "GBP"
    },
    {
        "type": "debit",
        "amount": 760590.85,
        "currency": "USD"
    },
    {
        "type": "card funding",
        "amount": 951067.11,
        "currency": "USD"
    },
    {
        "type": "credit",
        "amount": 263494.87,
        "currency": "USD"
    },
    {
        "type": "exchange",
        "amount": 904496.25,
        "currency": "NGN"
    },
    {
        "type": "debit",
        "amount": 514592.33,
        "currency": "GBP"
    },
    {
        "type": "debit",
        "amount": 384212.23,
        "currency": "GBP"
    },
    {
        "type": "debit",
        "amount": 396421.06,
        "currency": "NGN"
    },
    {
        "type": "exchange",
        "amount": 986508.14,
        "currency": "NGN"
    },
    {
        "type": "exchange",
        "amount": 282407.73,
        "currency": "USD"
    },
    {
        "type": "exchange",
        "amount": 516091.23,
        "currency": "GBP"
    },
    {
        "type": "credit",
        "amount": 838047.08,
        "currency": "NGN"
    },
    {
        "type": "card funding",
        "amount": 979446.61,
        "currency": "NGN"
    },
    {
        "type": "card funding",
        "amount": 995363.99,
        "currency": "NGN"
    },
    {
        "type": "debit",
        "amount": 266357.58,
        "currency": "USD"
    },
    {
        "type": "credit",
        "amount": 93388.7,
        "currency": "NGN"
    },
    {
        "type": "credit",
        "amount": 13841.44,
        "currency": "NGN"
    },
    {
        "type": "credit",
        "amount": 665331.58,
        "currency": "NGN"
    },
    {
        "type": "credit",
        "amount": 668066.87,
        "currency": "GBP"
    },
    {
        "type": "exchange",
        "amount": 368065.01,
        "currency": "NGN"
    },
    {
        "type": "credit",
        "amount": 127459.32,
        "currency": "GBP"
    },
    {
        "type": "credit",
        "amount": 542559.66,
        "currency": "NGN"
    },
    {
        "type": "exchange",
        "amount": 398290.82,
        "currency": "USD"
    },
    {
        "type": "debit",
        "amount": 459203.49,
        "currency": "GBP"
    },
    {
        "type": "credit",
        "amount": 794448.99,
        "currency": "GBP"
    },
    {
        "type": "credit",
        "amount": 979902.06,
        "currency": "NGN"
    },
    {
        "type": "exchange",
        "amount": 104312.77,
        "currency": "GBP"
    },
    {
        "type": "exchange",
        "amount": 994882.17,
        "currency": "USD"
    },
    {
        "type": "exchange",
        "amount": 4520.61,
        "currency": "NGN"
    },
    {
        "type": "debit",
        "amount": 117836.13,
        "currency": "NGN"
    },
    {
        "type": "credit",
        "amount": 685443.42,
        "currency": "USD"
    },
    {
        "type": "exchange",
        "amount": 792242.35,
        "currency": "GBP"
    },
    {
        "type": "debit",
        "amount": 280433.01,
        "currency": "GBP"
    },
    {
        "type": "exchange",
        "amount": 39481.08,
        "currency": "NGN"
    },
    {
        "type": "card funding",
        "amount": 828792.5,
        "currency": "NGN"
    },
    {
        "type": "credit",
        "amount": 776249.09,
        "currency": "USD"
    },
    {
        "type": "card funding",
        "amount": 870501.64,
        "currency": "NGN"
    },
    {
        "type": "card funding",
        "amount": 585752.71,
        "currency": "GBP"
    },
    {
        "type": "exchange",
        "amount": 501404.52,
        "currency": "USD"
    },
    {
        "type": "debit",
        "amount": 811932.15,
        "currency": "NGN"
    },
    {
        "type": "card funding",
        "amount": 226743.27,
        "currency": "USD"
    },
    {
        "type": "credit",
        "amount": 508256.04,
        "currency": "GBP"
    },
    {
        "type": "exchange",
        "amount": 730349.04,
        "currency": "GBP"
    },
    {
        "type": "exchange",
        "amount": 704752.17,
        "currency": "NGN"
    },
    {
        "type": "exchange",
        "amount": 248187.52,
        "currency": "USD"
    },
    {
        "type": "exchange",
        "amount": 906539.25,
        "currency": "NGN"
    },
    {
        "type": "card funding",
        "amount": 17172.26,
        "currency": "GBP"
    },
    {
        "type": "card funding",
        "amount": 479526.44,
        "currency": "GBP"
    },
    {
        "type": "credit",
        "amount": 741226.26,
        "currency": "USD"
    },
    {
        "type": "exchange",
        "amount": 492310.96,
        "currency": "NGN"
    },
    {
        "type": "credit",
        "amount": 62998.58,
        "currency": "USD"
    },
    {
        "type": "exchange",
        "amount": 321117.88,
        "currency": "GBP"
    },
    {
        "type": "credit",
        "amount": 575554.62,
        "currency": "NGN"
    },
    {
        "type": "exchange",
        "amount": 572811.33,
        "currency": "USD"
    },
    {
        "type": "exchange",
        "amount": 724433.92,
        "currency": "USD"
    },
    {
        "type": "exchange",
        "amount": 139911.74,
        "currency": "USD"
    },
    {
        "type": "debit",
        "amount": 29894.88,
        "currency": "NGN"
    },
    {
        "type": "card funding",
        "amount": 918355.31,
        "currency": "GBP"
    },
    {
        "type": "debit",
        "amount": 296694.22,
        "currency": "NGN"
    },
    {
        "type": "credit",
        "amount": 950224.13,
        "currency": "NGN"
    },
    {
        "type": "exchange",
        "amount": 222016.32,
        "currency": "GBP"
    },
    {
        "type": "debit",
        "amount": 587604.33,
        "currency": "NGN"
    },
    {
        "type": "credit",
        "amount": 111645.29,
        "currency": "NGN"
    },
    {
        "type": "exchange",
        "amount": 491105.48,
        "currency": "NGN"
    },
    {
        "type": "card funding",
        "amount": 387452.01,
        "currency": "USD"
    },
    {
        "type": "debit",
        "amount": 218209.06,
        "currency": "NGN"
    },
    {
        "type": "credit",
        "amount": 263726.72,
        "currency": "USD"
    },
    {
        "type": "debit",
        "amount": 274084.75,
        "currency": "NGN"
    },
    {
        "type": "exchange",
        "amount": 902464.26,
        "currency": "NGN"
    },
    {
        "type": "credit",
        "amount": 888150.99,
        "currency": "GBP"
    },
    {
        "type": "exchange",
        "amount": 273588.33,
        "currency": "GBP"
    },
    {
        "type": "card funding",
        "amount": 963258.96,
        "currency": "GBP"
    }
]
const usertransactions =  transactions.filter(transaction => transaction?.currency?.toLocaleLowerCase() == activeCurrency?.currency?.toLocaleLowerCase());
const translength = usertransactions.length
console.log(usertransactions) 
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
        <Text style={styles.title} lightColor='#000000' numberOfLines={1}>
          {`${item.type}:  ${item.currency}`}</Text>
        <Text style={styles.subtitle} lightColor='#00000099'>21st Feb, 2024, 23:21</Text>
        </View>

    </View>
    <Text style={styles.amt}>{accounting.formatMoney(item?.amount, activeCurrency?.symbol, 2)}</Text>
    </View>
    </TouchableOpacity>
  );





  return (
    <View style={styles.container} lightColor="#fbfcfd" darkColor="#000">
    <SafeAreaView style={{ flex: 1 }}>
    
<ImageBackground  source={myimg} resizeMode="cover"  style={{minHeight:120, gap: 7, flexDirection:'row', padding:12, alignItems:'center', marginBottom:30, borderWidth: 5,
 borderColor: Colors[colorScheme ?? 'light'].bgc, borderRadius: 7, backgroundColor: Colors[colorScheme ?? 'light'].bgc
}}

>
<View style={{width:'80%', backgroundColor:'transparent'}} >
  <View style={{justifyContent:'space-between', flexDirection:'row', backgroundColor:'transparent'}}>
  <View style={{gap:6, flexDirection:'row', alignItems:'center',  padding:4,  borderRadius:6, }} lightColor='#F7E6FD'>
  <Image
                        source={activeCurrency.logo}
                        style={{ width: 15, height: 15, borderRadius: 50 }}
                      />
                    <Text lightColor='#B61EEC' style={{ fontWeight:'500', fontFamily:'Satoshimid',  marginBottom:0,  fontSize:12 }}>{activeCurrency?.currency} Balance</Text>
  </View>

  </View>



<Text style={{fontSize:26, fontFamily:'SoraBold'}} lightColor='#000'>
{!visibleBalance ? (`${activeCurrency?.symbol} *****`) : (accounting.formatMoney(activeCurrency?.balance, activeCurrency?.symbol, 2)) }
</Text>

<Text style={{fontSize:12, fontFamily:'Satoshi'}}>Last Updated 10 Minutes Ago</Text>
</View>

<View style={{width: '15%', backgroundColor:'transparent', alignItems:'flex-end'}}>
<Ionicons onPress={setfuncvisible}
 name={!visibleBalance ? 'eye-off-outline' : 'eye-outline'}

size={22} color='black'/>
</View>


</ImageBackground>
<View style={{backgroundColor:'transparent'}}>
<Text style={styles.header}>Transactions</Text>
</View>
<ScrollView style={{flex:1, }}>
{
  translength  ? (
<FlatList
        data={usertransactions}
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTransactionItem}

      />
  ) :
  (
    <View style={{ backgroundColor:'transparent', padding: 30, gap: 4, paddingTop:60, alignItems:'center' }}>
  <Image
                        source={myimg3}
                        style={{ width: 120, height: 120,  }}
                      />
          <Text style={{fontSize:18, textAlign:'center', fontFamily:'SoraBold'}}>No Transactions Yet</Text>
          <Text style={{textAlign:'center', fontFamily:'Satoshi'}}>There are currently no transactions in your account history.</Text>
    </View>

  )
}

    

    <RBSheet ref={idTypeRef}
              height={500}
              closeOnTouchablesDragDown={false}
              closeOnDragDown={true}
              minClosingHeight={100}
              customStyles={{
                container: {
          borderTopStartRadius:6,
          borderTopEndRadius: 6,
                  alignItems: "center",
                  backgroundColor: Colors[colorScheme ?? 'light'].login
                },
                draggableIcon: {
                  backgroundColor: "#000"
                }
              }}
              openDuration={550}>
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
    backgroundColor:'transparent'
  },
  container: {
    flex: 1,

    paddingTop: 20,
    paddingHorizontal: 15,
  },
  amt:{
fontSize:13,
fontWeight:'500',
// fontFamily:'Satoshimid'
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
    paddingVertical: 17,
    marginVertical: 4,
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
