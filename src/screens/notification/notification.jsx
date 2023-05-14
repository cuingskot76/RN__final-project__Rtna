import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Modalku from '../../components/Modalku';
import Snackbarku from '../../components/Snackbarku';
import Datepickerku from '../../components/Datepickerku';

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

      {/* komponen datepicker dipangil disini */}
      <Datepickerku />
    </View>
  );
};

export default Notification;
