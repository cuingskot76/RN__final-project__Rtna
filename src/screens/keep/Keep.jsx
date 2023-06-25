import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {SearchIcon} from '../../../public/assets/icons';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Keep = () => {
  // state untuk inputan pada text input
  const [input, setInput] = useState('');

  // fungsi untuk menghandle inputan pada text input
  const onHandleClick = e => {
    // meng-set inputan ke state input
    setInput(e);
  };

  const datas = [
    {
      id: 1,
      title: 'Perjanjian dengan setan',
      time: '20:00 - 21:00',
      img: 'https://i.scdn.co/image/a63dca57c3fb796f6ae05ee9695a7fbc6b5e595c',
    },
    {
      id: 2,
      title: 'Genderuwo dikatain',
      time: '22:00',
      img: 'https://i.scdn.co/image/ab6765630000ba8a0b9f43cdbe95f450389cb32f',
    },
    {
      id: 3,
      title: 'Kuntilanak merah jambu',
      time: '23:00',
      img: 'https://i.scdn.co/image/ab6765630000ba8a95665b58c922ad046ac2e7c9',
    },
    {
      id: 4,
      title: 'Tumbal perempuan',
      time: '21:00 - 21:30',
      img: 'https://i.scdn.co/image/ab6765630000ba8a84a1ccecb0e48f742533d5e0',
    },
    {
      id: 5,
      title: 'Cerita tengah malam',
      time: '24:00',
      img: 'https://i.scdn.co/image/ab6765630000ba8a99fb0d9d10ecab650ed5d3ea',
    },
  ];

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

      <View>
        {
          // menampilkan data dari state datas
          datas.map(data => (
            <TouchableOpacity
              key={data.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                gap: 20,
              }}>
              <View>
                <Image
                  source={{uri: data.img}}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    resizeMode: 'cover',
                  }}
                  alt={`${data.title} image`}
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
                    {data.title}
                  </Text>
                  <Text style={{fontSize: 14, color: '#9FA5C0'}}>
                    {data.time}
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
        }
      </View>
    </View>
  );
};

export default Keep;
