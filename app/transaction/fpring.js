import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const MyComponent = () => {
  const countryRef = useRef();
  const genderRef = useRef();
  const cityRef = useRef();
  const idTypeRef = useRef();

  const openBottomSheet = (ref) => {
    // Close all previous bottom sheets before opening the new one
    closeAllBottomSheets(ref);
    ref.current.open();
  };


    const closeAllBottomSheets = (clickedRef) => {
        if (clickedRef !== countryRef) countryRef.current.close();
        if (clickedRef !== genderRef) genderRef.current.close();
        if (clickedRef !== cityRef) cityRef.current.close();
        if (clickedRef !== idTypeRef) idTypeRef.current.close();
      };


  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => openBottomSheet(countryRef)} style={styles.option}>
        <Text>Country</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openBottomSheet(genderRef)} style={styles.option}>
        <Text>Gender</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openBottomSheet(cityRef)} style={styles.option}>
        <Text>City</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openBottomSheet(idTypeRef)} style={styles.option}>
        <Text>ID Type</Text>
      </TouchableOpacity>

      {/* Bottom Sheets */}
      <RBSheet ref={countryRef}>
        <View style={styles.bottomSheet}>
          <Text>Country Select</Text>

                <TouchableOpacity onPress={() => openBottomSheet(idTypeRef)} style={styles.option}>
        <Text>ID Type</Text>
      </TouchableOpacity>
          {/* Your country select component goes here */}
        </View>
      </RBSheet>

      <RBSheet ref={genderRef}>
        <View style={styles.bottomSheet}>
          <Text>Gender Select</Text>
          {/* Your gender select component goes here */}
        </View>
      </RBSheet>

      <RBSheet ref={cityRef}>
        <View style={styles.bottomSheet}>
          <Text>City Select</Text>
          {/* Your city select component goes here */}
        </View>
      </RBSheet>

      <RBSheet ref={idTypeRef}>
        <View style={styles.bottomSheet}>
          <Text>ID Type Select</Text>
          {/* Your ID type select component goes here */}
        </View>
      </RBSheet>
    </ScrollView>
    </SafeAreaView>

  );
};

const styles = {
  option: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  bottomSheet: {
    padding: 16,
  },
};

export default MyComponent;
