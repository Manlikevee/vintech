import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native';

const Dialpad = () => {
  const [otp, setOtp] = useState(['', '', '', '']); // Initialize OTP values

  const handlePress = (value) => {
    const newOtp = [...otp];
    const emptyIndex = newOtp.findIndex(code => code === '');
    if (emptyIndex !== -1) {
      newOtp[emptyIndex] = value;
      setOtp(newOtp);
    }
  };

  const handleDelete = () => {
    const newOtp = [...otp];
    const lastFilledIndex = newOtp.reduce((acc, cur, index) => cur !== '' ? index : acc, -1);
    if (lastFilledIndex !== -1) {
      newOtp[lastFilledIndex] = '';
      setOtp(newOtp);
    }
  };

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handlePress(item)}>
      <View style={styles.buttonInner}>
        <Text style={styles.buttonText}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderOtpInput = ({ item, index }) => (
    <TextInput
      style={styles.otpInput}
      value={otp[index]}
      onChangeText={(value) => handleChange(value, index)}
      maxLength={1}
      keyboardType="numeric"
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.otpContainer}>
        <FlatList
          data={otp}
          renderItem={renderOtpInput}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        />
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '']}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    marginHorizontal: 5,
    fontSize: 24,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 20,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Dialpad;
