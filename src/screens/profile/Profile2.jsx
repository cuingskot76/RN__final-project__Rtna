import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const Profile2 = () => {
  const [username, setUsername] = useState('');
  const [data, setData] = useState([]);

  const exitApp = () => {
    Alert.alert('Warning', 'Apakah Mau Keluar Aplikasi?', [
      {
        text: 'Tidak',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Iya',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  //   fungsi untuk mengambil data dari API
  const fetchUserData = async () => {
    try {
      // mengambil data dari API dengan method GET
      //   http://10.0.2.2:3000 = adalah default IP untuk emulator android
      const res = await fetch('http://10.0.2.2:3000/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      //   mengubah data yang didapat menjadi .json
      const json = await res.json();

      //   set data yang didapat ke variabel data
      setData(json);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    // memanggil fungsi fetchUserData
    fetchUserData();

    const backAction = () => {
      exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView style={tampilan.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#8B9A46" />
      <View style={tampilan.headcop}>
        <Text
          style={{
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 30,
          }}>
          Welcome to My Profile
        </Text>
      </View>
      <TouchableOpacity
        style={tampilan.kontainergambar}
        onPress={() =>
          Alert.alert('Gambar', 'Gambar Kupu-kupu', [
            {
              text: 'Batal',
              onPress: () => console.log('Batalkan'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => console.log('OKOK'),
            },
          ])
        }>
        <View style={tampilan.gambarp}>
          <Image
            source={require('../../Images/kupu2.jpg')}
            style={tampilan.gambar}
          />
          <Image
            source={require('../../Images/kupu2.jpg')}
            style={tampilan.gambar}
          />
        </View>
      </TouchableOpacity>
      {data
        ? data?.map(item => (
            <View style={tampilan.latar}>
              <View style={tampilan.teks}>
                <Text
                  style={{
                    alignContent: 'center',
                    color: '#FFFBF5',
                    alignItems: 'center',
                  }}>
                  {item?.description}
                </Text>
              </View>
              <TextInput
                value={username}
                style={tampilan.inputtext}
                onChangeText={value => setUsername(value)}
              />
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../Images/aku.png')}
                  style={tampilan.gambar}
                />
                <Text style={{color: 'white', fontSize: 20}}>{item?.name}</Text>
                <Text style={{color: 'white', fontSize: 16}}>{item?.nim}</Text>
              </View>
            </View>
          ))
        : null}
    </ScrollView>
  );
};

const tampilan = StyleSheet.create({
  button: {
    backgroundColor: '#1A5F7A',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 20,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: '#FFFBF5',
    marginHorizontal: 10,
    borderRadius: 15,
    elevation: 3,
  },
  inputtext: {
    borderWidth: 2,
    borderColor: '#1A5F7A',
    paddingHorizontal: 10,
    marginBottom: 10,
    margin: 30,
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: '#FFFBF5',
    color: '#000B49',
  },
  gambar: {
    width: 180,
    height: 180,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  gambardua: {
    backgroundColor: '#FFABE1',
    width: 180,
    height: 180,
    marginTop: 5,
    marginBottom: 20,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  kontainergambar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  headcop: {
    backgroundColor: '#0E8388',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  container: {
    flex: 0.5,
    backgroundColor: '#FFFBF5',
  },
  gambarp: {
    marginTop: -30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  latar: {
    flex: 0.5,
    borderColor: '#159895',
    backgroundColor: '#159895',
    borderWidth: 2,
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  tombol: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  teks: {
    borderWidth: 2,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 10,
    borderColor: '#FFFBF5',
    alignContent: 'center',
    marginBottom: 30,
  },
});

export default Profile2;
