import {View, Text} from 'react-native';
import React from 'react';
import Snackbar from 'react-native-snackbar';

const SnackBar = () => {
  Snackbar.show({
    text: 'Ini notifikasi ya :)',
    duration: Snackbar.LENGTH_SHORT,
  });

  return (
    <View>
      <Text>SnackBar</Text>
    </View>
  );
};

export default SnackBar;
