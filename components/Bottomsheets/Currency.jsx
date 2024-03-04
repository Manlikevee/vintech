
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Switch,
  useWindowDimensions,
} from "react-native";
import { Text, View } from '@/components/Themed';
import { useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

const Currency = () => {
    const [darkmode, setDarkmode] = useState(false);
    const [device, setDevice] = useState(false);
    const { width } = useWindowDimensions();
    const [theme, setTheme] = useState("dim");
    const [isOpen, setIsOpen] = useState(false);
  
    const bottomSheetModalRef = useRef(null);
  
    const snapPoints = ["25%", "48%", "80%" ];

    function handlePresentModal() {
        bottomSheetModalRef.current?.present();
        setTimeout(() => {
          setIsOpen(true);
        }, 100);
      }
    
  return (
 
     <View
      style={[StyleSheet.absoluteFill, { backgroundColor: isOpen ? 'gray' : 'transparent' }]}
      >
        <Button title="Present Modal" onPress={handlePresentModal} />
      
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 10 }}
          onDismiss={() => setIsOpen(false)}
          
        >
          <BottomSheetScrollView style={styles.contentContainer}>
            <Text style={[styles.title, { marginBottom: 20 }]}>
              Dark mode
            </Text>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Dark mode</Text>
              <Switch
                value={darkmode}
                onChange={() => setDarkmode(!darkmode)}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Use device settings</Text>
              <Switch value={device} onChange={() => setDevice(!device)} />
            </View>
            <Text style={styles.description}>
              Set Dark mode to use the Light or Dark selection located in your
              device Display and Brightness settings.
              Set Dark mode to use the Light or Dark selection located in your
              device Display and Brightness settings.
              Set Dark mode to use the Light or Dark selection located in your
              device Display and Brightness settings.
              Set Dark mode to use the Light or Dark selection located in your
              device Display and Brightness settings.
              Set Dark mode to use the Light or Dark selection located in your
              device Display and Brightness settings.
              Set Dark mode to use the Light or Dark selection located in your
              device Display and Brightness settings.
              Set Dark mode to use the Light or Dark selection located in your
              device Display and Brightness settings.
              Set Dark mode to use the Light or Dark selection located in your
              device Display and Brightness settings.
            </Text>

            <View
              style={{
                width: width,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: "gray",
                marginVertical: 30,
              }}
            />
            <Text style={[styles.title, { width: "100%" }]}>Theme</Text>
            <Pressable style={styles.row} onPress={() => setTheme("dim")}>
              <Text style={styles.subtitle}>Dim</Text>
              {theme === "dim" ? (
                <AntDesign name="checkcircle" size={24} color="#4A98E9" />
              ) : (
                <Entypo name="circle" size={24} color="#56636F" />
              )}
            </Pressable>
            <Pressable
              style={styles.row}
              onPress={() => setTheme("lightsOut")}
            >
              <Text style={styles.subtitle}>Lights out</Text>
              {theme === "lightsOut" ? (
                <AntDesign name="checkcircle" size={24} color="#4A98E9" />
              ) : (
                <Entypo name="circle" size={24} color="#56636F" />
              )}
            </Pressable>
          </BottomSheetScrollView>
        </BottomSheetModal>
      </View>

  )
}

export default Currency

const styles = StyleSheet.create({})