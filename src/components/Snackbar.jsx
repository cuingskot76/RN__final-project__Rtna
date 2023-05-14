// import React, {useEffect} from 'react';
// import {
//   View,
//   StyleSheet,
//   Image,
//   StatusBar,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import Snackbar from 'react-native-snackbar';
// const SnackbarUI = () => {
//   function showSnackbar() {
//     Snackbar.show({
//       text: 'Playlist ditambahkan',
//       duration: Snackbar.LENGTH_INDEFINITE,
//       backgroundColor: 'crimson',
//       action: {
//         text: 'OK',
//         textColor: 'black',
//         onPress: () => {
//           /*Do something. */
//           undo();
//         },
//       },
//       textColor: 'black',
//     });
//   }
//   function undo() {
//     console.log('berhasil ditambahkan');
//   }

//   return (
//     <View style={{Flex: 1}}>
//       <TouchableOpacity onPress={() => showSnackbar()}>
//         <Text>Klik Snackbar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SnackbarUI;
