import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SearchIcon} from '../../../public/assets/icons';

const Search = () => {
  // state untuk inputan pada text input
  const [input, setInput] = useState('');

  // fungsi untuk menghandle inputan pada text input
  const onHandleClick = e => {
    // meng-set inputan ke state input
    setInput(e);
  };

  return (
    <View
      style={{width: '100%', flex: 1, padding: 20, backgroundColor: '#fff'}}>
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
    </View>
  );
};

export default Search;
