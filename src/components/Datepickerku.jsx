import {Button, View} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const Datepickerku = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  console.log(date);
  return (
    <View style={{flex: 1}}>
      <Button title="Show Datepicker" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default Datepickerku;
