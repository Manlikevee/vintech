import {
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  Vibration,
  RefreshControl,
  FlatList,
  Dimensions,
  SafeAreaView,
  Button,
} from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { Text, View } from "@/components/Themed";
import {
  AntDesign,
  EvilIcons,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  useState,
  useContext,
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { UserData } from "@/components/Veecontext";
import accounting from "accounting";

import RBSheet from "react-native-raw-bottom-sheet";
import axios from "axios";
import Converterblock from "../../components/Converterblock";
import { router } from "expo-router";

export default function Page() {
  const [refreshing, setRefreshing] = useState(false);
  const colorScheme = useColorScheme();
  const { UserAccounts } = useContext(UserData);
  const { otherCurrencies } = useContext(UserData);
  const [figure, setFigure] = useState("");
  const [activeConvertCurrency, setActiveConvertCurrency] = useState(
    otherCurrencies[0]
  );
  const refRBSheet = useRef();
  const [rateCard, setRatecard] = useState(null);
  const { activeCurrency } = useContext(UserData);
  const [convertedvalue, setconvertedvalue] = useState(0);
  const b = activeCurrency?.currency;
  let url = `https://api.exchangerate-api.com/v4/latest/${b}`;

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchDataOnClick(url);
    console.log(";fefe");
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const mylogin = () => {
    router.replace("/(auth)/");
  };

  useEffect(() => {
    // Filter UserAccounts to find a currency that is not the same as activeCurrency
    const convertCurrency = UserAccounts.find(
      (account) => account?.currency !== activeCurrency.currency
    );

    // Set activeConvertCurrency to the found currency
    setActiveConvertCurrency(convertCurrency);
    fetchDataOnClick(url);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to handle currency change

  fetchDataOnClick = async (url) => {
    try {
      // Make the GET request using Axios
      const response = await axios.get(url);

      // If the request is successful, handle the data

      setRatecard(response.data);
      console.log(rateCard);
      // You can update state or do any other action with the fetched data here
    } catch (error) {
      // If there's an error, handle it here
      console.error("Error fetching data:", error);
      // You can update state or show an error message to the user here
    }
  };

  const handleChangeCurrency = (currency) => {
    setActiveConvertCurrency(currency);
    fetchDataOnClick(url)
  };
  const validateCurrency = (text) => {
    console.log(text);
    const currentrate = rateCard?.rates?.[activeConvertCurrency?.currency];
    const convertedval = parseFloat(currentrate) * parseFloat(text);

    setconvertedvalue(convertedval);
  };

  return (
    <View style={styles.container} lightColor="#fbfcfd" darkColor="#000">
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#E57F06"]} // Use your primary color for the refresh indicator
              tintColor={"#E57F06"} // iOS fallback color
              progressBackgroundColor="#ffffff" // Background color on Android
            />
          }
          showsVerticalScrollIndicator={false} // Hide vertical scrollbar
          showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
        >
                <View style={styles.spacebtw} lightColor="transparent">
                <TouchableOpacity>
                  <View
                    style={[
                      styles.currencyinputs,
                      {
                        borderColor: Colors[colorScheme ?? "light"].borderColor,
                      },
                    ]}
                    lightColor="#fff"
                    darkColor="#111111"
                  >
               <View lightColor="#fff" darkColor="#111111">
                      <EvilIcons
                        name="arrow-left"
                        size={22}
                        color={Colors[colorScheme ?? "light"].text}
                      />
                    </View>
                    <View lightColor="#fff" darkColor="#111111">
                      <Text style={styles.mytxt} lightColor="#1C274C">
                       Go Back
                      </Text>
                    </View>
     
                  </View>
                </TouchableOpacity>
              </View>
          <View style={styles.scrollgap} lightColor="transparent">


    

            <View style={styles.spacebtw} lightColor="transparent">
      
      
      
              <View>
                <TouchableOpacity>
                  <View
                    style={[
                      styles.currencyinput,
                      {
                        borderColor: Colors[colorScheme ?? "light"].borderColor,
                      },
                    ]}
                    lightColor="#fff"
                    darkColor="#111111"
                  >
                    <View lightColor="#fff" darkColor="#111111">
                      <Image
                        source={activeCurrency.logo}
                        style={{ width: 17, height: 17, borderRadius: 50 }}
                      />

                      {/* <Image source={require('../../assets/images/ngn.png')} style={{ width: 18, height: 18 , borderRadius: 50}} /> */}
                    </View>
                    <View lightColor="#fff" darkColor="#111111">
                      <Text style={styles.mytxt} lightColor="#1C274C">
                        {activeCurrency.currency}
                      </Text>
                    </View>
                    <View lightColor="#fff" darkColor="#111111">
                      <EvilIcons
                        name="chevron-down"
                        size={22}
                        color={Colors[colorScheme ?? "light"].text}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View lightColor="transparent">
                <TouchableOpacity>
                  <View
                    style={[
                      styles.currencyinput,
                      {
                        borderColor: Colors[colorScheme ?? "light"].borderColor,
                      },
                    ]}
                    lightColor="#fff"
                    darkColor="#111111"
                  >
                    <View lightColor="#fff" darkColor="#111111">
                      <Ionicons
                        name="swap-vertical"
                        color="#1C274C"
                        style={styles.myicon}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View lightColor="transparent">
                <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                  <View
                    style={[
                      styles.currencyinput,
                      {
                        borderColor: Colors[colorScheme ?? "light"].borderColor,
                      },
                    ]}
                    lightColor="#fff"
                    darkColor="#111111"
                  >
                    <View lightColor="#fff" darkColor="#111111">
                      <Image
                        source={activeConvertCurrency?.logo}
                        style={{ width: 17, height: 17, borderRadius: 50 }}
                      />

                      {/* <Image source={require('../../assets/images/ngn.png')} style={{ width: 18, height: 18 , borderRadius: 50}} /> */}
                    </View>
                    <View lightColor="#fff" darkColor="#111111">
                      <Text style={styles.mytxt} lightColor="#1C274C">
                        {activeConvertCurrency?.currency}
                      </Text>
                    </View>
                    <View lightColor="#fff" darkColor="#111111">
                      <EvilIcons
                        name="chevron-down"
                        size={22}
                        color={Colors[colorScheme ?? "light"].text}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* <View>

<Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
</View> */}
            <View style={{ gap: 6 }} lightColor="transparent">
              <Text>From</Text>
              <Converterblock
                figure={figure}
                setfigure={setFigure}
                validateCurrency={validateCurrency}
                convertedvalue={convertedvalue}
              />
            </View>

            <View style={{ gap: 6 }} lightColor="transparent">
              <Text>To</Text>
              <Converterblock
                currencyid={activeConvertCurrency?.id}
                convertedvalue={convertedvalue}
                amount={20}
                readonly={true}
                figure={figure}
                setfigure={setFigure}
              />
              {rateCard?.base ? (   <Text
                style={{ fontFamily: "Satoshi", fontSize: 13, lineHeight: 20 }}
                lightColor="#00000099"
              >
                {" "}
                {activeCurrency?.symbol}&nbsp;1 is equivalent to &nbsp;
                {accounting.formatMoney(
                  rateCard?.rates?.[activeConvertCurrency?.currency],
                  activeConvertCurrency?.symbol,
                  5
                )}
              </Text>) : (   <Text
                style={{ fontFamily: "Satoshi", fontSize: 13, lineHeight: 20 }}
                lightColor="#00000099"
              >
        Error Fetching Rates, Pull Down To Refresh
              </Text>)}
           
            </View>

            <View style={{ gap: 6 }} lightColor="transparent">
              <Text> Summary </Text>
              <View
                style={[
                  styles.mybalance,
                  {
                    borderColor: Colors[colorScheme ?? "light"].borderColor,
                  },
                ]}
                lightColor="#fff"
                darkColor="#111111"
              >
                <View style={{ gap: 15 }} lightColor="#fff" darkColor="#111111">
                  <View
                    style={styles.summarytab}
                    lightColor="#fff"
                    darkColor="#111111"
                  >
                    <Text Text style={styles.lbl} lightColor="#1C274C99">
                      Expected swap
                    </Text>
                    <Text style={styles.value} lightColor="#1C274C">
                      {accounting.formatMoney(
                        figure,
                        activeCurrency?.symbol,
                        2
                      )}
                    </Text>
                  </View>

                  <View
                    style={styles.summarytab}
                    lightColor="#fff"
                    darkColor="#111111"
                  >
                    <Text Text style={styles.lbl} lightColor="#1C274C99">
                      Transaction fee
                    </Text>
                    <Text style={styles.value} lightColor="#1C274C">
                      {activeCurrency?.symbol}0.00
                    </Text>
                  </View>

                  <View
                    style={styles.summarytab}
                    lightColor="#fff"
                    darkColor="#111111"
                  >
                    <Text Text style={styles.lbl} lightColor="#1C274C99">
                      Expected total
                    </Text>
                    <Text style={styles.value} lightColor="#1C274C">
                      {accounting.formatMoney(
                        convertedvalue,
                        activeConvertCurrency?.symbol,
                        2
                      )}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* from and to block */}

  
        </ScrollView>
        <TouchableOpacity
          style={{
            padding: 18,
            backgroundColor: "#E57F06",
            borderRadius: 7,
            marginBottom: 15,
          }}
          
          // onPress={mylogin}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Proceed</Text>
        </TouchableOpacity>

        <RBSheet
            dragFromTopOnly
            ref={refRBSheet}
            height={500}
            openDuration={750}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
              draggableIcon: {
                backgroundColor: "#000",
              },
            }}
          >
            <ScrollView>
   
            
          <View  style={{ flex: 1, padding: 10 }}>
          <Text style={[styles.title, {  borderBottomWidth: 1, paddingBottom: 10,
         borderColor: Colors[colorScheme ?? 'light'].borderColor,  
        },
           ]}>
          Accounts
            </Text>
         
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
              backgroundColor: activeConvertCurrency && activeConvertCurrency.id === currency.id ? Colors[colorScheme ?? 'light'].curact : 'transparent', // Conditionally apply background color
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
     
          </View>
       

            </ScrollView>
          </RBSheet>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 10,
    paddingHorizontal: 15,
  },
  lbl: {
    fontFamily: "Satoshi",
    fontSize: 14,
    lineHeight: 20,
  },
  value: {
    // fontFamily:'Satoshimid',
    lineHeight: 20,
    fontSize: 14,
  },
  mybalance: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
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
  currencyButton:{
    padding: 17,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
      },
  fstys:{
    color: '#E57F06',
    fontFamily: 'Satoshimid',
    fontWeight: '100',
  },
  summarytab: {
    padding: 4,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  scrollgap: {
    gap: 30,

    paddingTop: 10,
  },
  block: {
    padding: 10,

    flex: 1,
  },
  currencyinput: {
    padding: 8,
    gap: 9,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#1C274C33",
    flexDirection: "row",
    alignItems: "center",
  },
  currencyinputs: {
    padding: 4,
    gap: 9,
    borderRadius: 9,
    marginTop:-1,
    marginBottom:3,
    borderWidth: 1,
    borderColor: "#1C274C33",
    flexDirection: "row",
    alignItems: "center",
  },
  spacebtw: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mytxt: {
    fontFamily: "Satoshimid",
    fontSize: 13,
    fontWeight: "400",
  },
  fd: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
  },
  fdscol: {
    padding: 8,
    paddingHorizontal: 15,
    marginVertical: 6,
    paddingBottom: 10,
    flexDirection: "column",
    gap: 20,
    justifyContent: "space-between",
    borderRadius: 6,
    marginBottom: 28,
    borderWidth: 1,
  },
  pdata: {
    paddingVertical: 10,
    backgroundColor: "transparent",
    gap: 29,
    flexDirection: "column",
  },
  item: {
    gap: 20,
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  myicon: {
    fontFamily: "Satoshimid",
    fontSize: 19,
  },
  itemText: {
    fontFamily: "Satoshimid",
    fontSize: 14,
  },
  mytxt: {
    padding: 4,
    fontFamily: "Satoshimid",
    fontSize: 14,
    fontWeight: 800,
  },
});
