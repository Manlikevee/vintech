import { ScrollView, StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const imageSource = { uri: 'https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.png' };
  return (
    <View style={styles.container} lightColor="#FEFEFE" darkColor="#000">
      <ScrollView>
        <View style={styles.currencyinput} lightColor="#fff" darkColor="#111111">
        <View lightColor="#fff" darkColor="#111111">
        <Image
          style={{
            width: 20, // Or use '100%' for responsive width
            height: 20,
            resizeMode: 'contain', // Or other resize modes
   
          }}
        
        source={imageSource} />
          </View> 
          <View lightColor="#fff" darkColor="#111111">
          <Text style={styles.mytxt}>USD</Text>
          </View>
           
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
paddingTop:20,
padding: 10,
flex: 1,
    
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
padding: 10,
gap:1,
borderRadius: 9,
borderWidth: 1,
borderColor:  '#1C274C33',
width: 130
  },
  mytxt:{
    fontFamily: 'Satoshimid',
  }
});
