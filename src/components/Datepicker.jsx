// import React, {useEffect} from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import DatePicker from 'react-native-datepicker';
// const DatePicker = () => {
//     const [date, setDate] = usestate(new Date());
//     const [open, setOpen] = usestate(false);

//     return (
//         <View style={{ justifyContent: 'center',
//                         alignItems: 'center' }}>
//         <TouchableOpacity onPress={() => setOpen(true)}>
//         <Text>DatePicker</Text>
//         </TouchableOpacity>
//         <DatePicker
//         locale="id"
//         node="date"
//         modal
//         open={open}
//         date={date}
//         androidVariant='nativeAndroid'
//         onConfirm={date => {
//             setOpen(false);
//             setDate(date);
//             console.log(date);
//         }}
//         onCancel{() => {
//             setOpen(false);
//         }}
//         />
//         </View>
//     );
// };

// export default DatePicker
