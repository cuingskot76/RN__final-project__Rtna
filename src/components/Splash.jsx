/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Tambahkan kode untuk menunggu beberapa detik sebelum menampilkan layar utama
    const timeout = setTimeout(() => {
      navigation.navigate('Main'); // Navigate ke halaman Home
    }, 3000); // Contoh menunggu 3 detik sebelum navigasi ke layar utama

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        // nambahin gambar disini
        source={require('../../public/assets/images/podcast.png')}
        alt="splash-screen-image"
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
