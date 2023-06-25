import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SearchIcon} from '../../../public/assets/icons';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Keep = () => {
  // state untuk inputan pada text input
  const [input, setInput] = useState('');
  const [horrorFavorite, setHorrorFavorite] = useState(null);

  // fungsi untuk menghandle inputan pada text input
  const onHandleClick = e => {
    // meng-set inputan ke state input
    setInput(e);
  };

  useEffect(() => {
    const getHorrorFavorite = async () => {
      try {
        // ambil data dari async storage dengan key "horrorFavorite"
        const storedItems = await AsyncStorage.getItem('horrorFavorite');
        // jika ada data horrorFavorite di async storage, maka parse data horrorFavorite menjadi array dan simpan ke state horrorFavorite
        const favorites = storedItems ? JSON.parse(storedItems) : [];
        // simpan data horrorFavorite ke state horrorFavorite
        setHorrorFavorite(favorites);
      } catch (error) {
        console.log(error);
      }
    };
    getHorrorFavorite();
  }, []);

  return (
    <View
      style={{width: '100%', flex: 1, padding: 20, backgroundColor: '#fff'}}>
      {/* input */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TextInput
          // value = untuk menampilkan inputan dari state input
          value={input}
          // onChangeText = untuk menghandle inputan dari text input
          onChangeText={onHandleClick}
          placeholder="Search podcast"
          style={{
            paddingHorizontal: 18,
            backgroundColor: '#F3F4F8',
            borderRadius: 16,
            height: 50,
            width: '80%',
            fontSize: 16,
          }}
        />
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FF7754',
            borderRadius: 16,
          }}>
          <SearchIcon />
        </TouchableOpacity>
      </View>

      {/* Favorite */}
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Favorite</Text>

        {horrorFavorite ? (
          horrorFavorite?.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                gap: 20,
              }}>
              <View>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    resizeMode: 'cover',
                  }}
                  alt={`${item.title} image`}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // backgroundColor: 'lightblue',
                  width: '75%',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    {item.title}
                  </Text>
                  <Text style={{fontSize: 14, color: '#9FA5C0'}}>
                    {item.time}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                  }}>
                  <TouchableOpacity>
                    <AntDesign name="play" size={25} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons name="trash-outline" size={25} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Belum ada podcast yang di favorite</Text>
        )}
      </View>
      {/* end__Favorite */}
    </View>
  );
};

export default Keep;
