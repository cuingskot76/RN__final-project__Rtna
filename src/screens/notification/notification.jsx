import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Snackbar from 'react-native-snackbar';

const Notification = () => {
  const notification = () => {
    Snackbar.show({
      text: 'Ini notifikasi ya :)',
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={notification}>
        <Text>Notification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notification;
