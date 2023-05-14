import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Snackbar from 'react-native-snackbar';
import SnackBar from '../../components/SnackBar';

const Notification = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text>Notification</Text>
        <SnackBar />
      </TouchableOpacity>
    </View>
  );
};

export default Notification;
