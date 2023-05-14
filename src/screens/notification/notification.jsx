import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Modalku from '../../components/Modalku';
import Snackbarku from '../../components/Snackbarku';

const Notification = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Notification</Text>
      <TouchableOpacity>
        {/* komponen snackbar dipanggil disini  */}
        <Snackbarku />
      </TouchableOpacity>

      {/* komponen modal dipanggil disini */}
      <Modalku />
    </View>
  );
};

export default Notification;
