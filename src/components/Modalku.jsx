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
// import Modal from 'react-native-snackbar';
// const Modalku = () => {
//   const [modal, setModal] = useState(false);

//   return (
//     <View>
//       <TouchableOpacity onPress={() => setModal(true)}>
//         <Text>Buka Modal</Text>
//       </TouchableOpacity>
//       <Modal
//         style={{margin: 10, justifyContent: 'flex-end'}}
//         isVisible={modal}
//         onBackdropPress={() => setModal(false)}
//         animation="fadeInUp"
//         animationTiming={2000}
//         animationOut="fadeOut"
//         animationOutTiming={2000}>
//         <View
//           style={{
//             height: 400,
//             backgroundColor: '#FFFF',
//             borderRadius: 10,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Text>I am the modal content</Text>
//           <ToucableOpacity onPress={() => setModal(false)}>
//             <Text>Tutup Modal</Text>
//           </ToucableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default Modalku;
