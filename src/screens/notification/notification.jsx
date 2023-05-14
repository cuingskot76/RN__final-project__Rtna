import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SnackBar from '../../components/Snackbar';

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
