import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
  Alert,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Modalku from '../../components/Modalku';
import Snackbarku from '../../components/Snackbarku';
import Datepickerku from '../../components/Datepickerku';

const Notification = () => {
  // buat state untuk menampung nilai dari switch
  const [isEnable, setIsEnable] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <TouchableOpacity>
          {/* komponen snackbar dipanggil disini  */}
          <Snackbarku />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
        }}>
        {/* komponen modal dipanggil disini */}
        <Modalku />
      </View>

      <View
        style={{
          flex: 1,
        }}>
        {/* komponen datepicker dipangil disini */}
        <Datepickerku />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Switch
        </Text>
        {/* switch */}
        <Switch
          value={isEnable}
          onValueChange={() => setIsEnable(!isEnable)}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnable ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      <View
        style={{
          flex: 1,
        }}>
        <Button
          title="Alert"
          onPress={() => Alert.alert('Alert', 'Ini adalah alert')}
        />
      </View>
    </ScrollView>
  );
};

export default Notification;
