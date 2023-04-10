/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Tambahkan kode untuk menunggu beberapa detik sebelum menampilkan layar utama
    const timeout = setTimeout(() => {
      navigation.navigate('Landing'); // Navigate ke halaman Home
    }, 6000); // Contoh menunggu 3 detik sebelum navigasi ke layar utama

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7FBFC" />
      <LottieView
        source={{
          uri: 'https://assets10.lottiefiles.com/packages/lf20_H3z9Jb.json',
        }}
        autoPlay
        loop={true}
        onAnimationFinish={() => {
          console.log('Animation finished!');
          navigation.navigate('Landing'); // Navigate ke halaman Home pada callback onAnimationFinish
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
