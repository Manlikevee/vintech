import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Platform , Image, Pressable, TouchableOpacity, Vibration, FlatList, Dimensions, SafeAreaView, ActivityIndicator } from 'react-native';
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { Text, View } from '@/components/Themed';
import { AntDesign, EvilIcons, Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useState, useContext } from 'react';
import { UserData } from '@/components/Veecontext';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import adap from '../../assets/images/adap.png'
import { htmlTemplate } from '../../components/htmlTemplate';
export default function Page() {
  let [name, setName] = useState("victor odah");
  const [loading, setLoading] = useState(false);
  const transactionData = [
    {
      label: 'Ref Number',
      value: 'TRN123456789'
    },
    {
      label: 'Status',
      value: 'Completed'
    },
    {
      label: 'Time',
      value: '2024-03-07 15:30:00'
    },
    {
      label: 'Amount',
      value: '$100.00'
    },
    {
      label: 'Beneficiary Name',
      value: 'John Doe'
    },
    {
      label: 'Beneficiary Bank',
      value: 'ABC Bank'
    },
    {
      label: 'Sender',
      value: 'Jane Smith'
    },
    {
      label: 'Payment Status',
      value: 'Processed'
    }
  ];

  const getStatusStyle = (status) => {
    if (status === 'Completed') {
      return styles.completed;
    } else if (status === 'Pending') {
      return styles.pending;
    } else if (status === 'Failed') {
      return styles.failed;
    }
  };
  


  // Accessing the array
  console.log(transactionData[0].label); // Output: Ref Number
  console.log(transactionData[0].value); // Output: TRN123456789
  
  const generatePdf = async () => {
    setLoading(true);
    const html = htmlTemplate(name);
    const file = await printToFileAsync({
      html: html,
      base64: false
    });

    await sharePdf(file.uri);
    setLoading(false);
  };

  const sharePdf = async (uri) => {
    await shareAsync(uri);
  };

  const colorScheme = useColorScheme();
  return (
    <View style={styles.container} lightColor="#fbfcfd" darkColor="#000" >
 
    <ScrollView style={styles.scrollgap}
showsVerticalScrollIndicator={false} // Hide vertical scrollbar
showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
>

{/* <Link  href={{
        pathname: "/(tabs)/",
        params: { id: '15423425' }
      }}>
        View user </Link> */}
<View style={[styles.roundbox, {
              borderColor: Colors[colorScheme ?? 'light'].cardborderColor,
            }]} lightColor='white' darkColor='#111111'>

<View lightColor='white' darkColor='#111111'>
<View style={{padding: 20, borderRadius: 50}}  lightColor='#23A26D1F' darkColor='#23A26D1F'>
<MaterialCommunityIcons name='check' size={22} color="#fff" style={{backgroundColor: '#23A26D', padding: 10, borderRadius:50,  }} />
</View>


</View>

<View style={{flexDirection:'column', gap: 5,
alignItems:'center', backgroundColor:'transparent'}} ba>
<Text style={styles.headingtext} lightColor='#474747'>Payment Success!</Text>


<Text style={styles.subheadingtext} lightColor='#474747'> Your payment has been successfully done.</Text>
</View>
             

</View>

<View style={[styles.roundbox, {
              borderColor: Colors[colorScheme ?? 'light'].cardborderColor,
            }]} lightColor='white' darkColor='#111111'>

<View style={{padding:17, width:'100%', borderRadius: 4, alignItems:'center', justifyContent:'center',}}  lightColor='#F5F6F7'  darkColor='#FFFFFF14'>

<Text  lightColor='#121212' darkColor='#FFFFFF'>
Payment Details
</Text>

</View>



<View style={{flexDirection:'column', gap: 5, backgroundColor:'transparent'}}>



{transactionData.map((item, index) => (
  <View style={{padding:0, width:'100%', flexDirection:"row", borderRadius: 4, alignItems:'start', marginTop: 8}}  lightColor='#fff'  darkColor='transparent'>
          <Text style={styles.label} lightColor='#707070' darkColor='#FFFFFF'>
            {item.label}
          </Text>
          <Text style={[styles.content]} lightColor='#333333' darkColor='#FFFFFF'>
            {item.label === 'Status' ? (
             <View > 
              <Text style={[item.label === 'Status' ? getStatusStyle(item.value) : null, styles.pd ]}>  {item.value} </Text>
              </View>
              ) 
               : 
               (<Text>  {item.value} </Text>)
               
               }
          </Text>
          </View>
      ))}


{/* <Text style={styles.label}  lightColor='#707070' darkColor='#FFFFFF'>
Ref Number
</Text>

<Text style={styles.content} lightColor='#333333' darkColor='#FFFFFF'>
000085752257
</Text> */}




</View>

   

</View>


  </ScrollView>

<View style={{flexDirection:'row', gap: 4, width: '100%' }}>
<TouchableOpacity style={styles.sticky} onPress={generatePdf}>
  
  {loading ? <ActivityIndicator size="small" color="#0000ff" /> :   <Text>Sticky Footer</Text> }
  </TouchableOpacity>
  <TouchableOpacity style={styles.sticky} onPress={generatePdf}>

{loading ? <ActivityIndicator size="small" color="#0000ff" /> :   <Text>Sticky Footer</Text> }
</TouchableOpacity>
</View>

    

  </View>
  ) 
}


const styles = StyleSheet.create({

  sticky:{
    backgroundColor: '#E57F06',
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 8,
    width: '49%'
  },
  container:{
    flex: 1,

    paddingTop:15,
paddingHorizontal: 15,
  },

  completed: {
    color: '#23A26D',
    padding: 6,
    fontSize: 13,
    backgroundColor: '#23A26D1F'
  },
  pending: {
    color: 'orange',
    fontWeight: 'bold',
  },
  failed: {
    color: 'red',
    fontWeight: 'bold',
  },
  success:{
    backgroundColor: '#23A26D1F'
  },
  scrollgap:{
paddingBottom: 10,
marginBottom: 10.
  },
  label:{
    width: '40%',

    padding: 4,
    fontSize: 14,
    fontWeight: 400
  },
  content:{
    width: '60%',

    alignItems:'flex-end',
    justifyContent:'flex-end',
    textAlign: 'right',
    padding: 4,
    fontSize: 14,
  },
  headingtext:{
    fontSize: 19,
   lineHeight: 20,
   fontWeight:'900',
    fontFamily: 'Satoshimid'
  },
  subheadingtext:{
    fontSize: 15,
   lineHeight: 20,
paddingBottom: 9,

    fontFamily: 'Satoshi'
  },
  block:{
    padding:10,

    flex: 1,
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
gap:29,
    flexDirection: 'column'

  },
  item:{
    gap: 20,
    flexDirection:'row'
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
  },
  roundbox:{
    marginTop: 19,
    marginBottom: 8,
padding: 16,
borderRadius: 6,

        borderRadius: 8,
borderWidth: 1,
alignItems: 'center',
gap: 15
  },
  pd:{
    padding: 4,
    borderRadius: 4,
     },
})
