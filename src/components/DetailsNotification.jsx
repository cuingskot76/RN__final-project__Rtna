import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const DetailsNotification = ({navigation}) => {
  console.log(navigation);
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 50,
      }}>
      <TouchableOpacity
        // kembali ke halaman home
        // ini fungsi sebagai back handler (kembali ke halaman sebelumnya)
        onPress={() => navigation.goBack()}>
        <Text>{'<-  Kembali'}</Text>
      </TouchableOpacity>

      <Text
        style={{
          marginTop: 50,
          fontWeight: '600',
        }}>
        Ngga ada apa-apa, hehe
      </Text>
    </View>
  );
};

export default DetailsNotification;
