import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

import userProfile from '../../../public/assets/images/aku.jpg';
import styles from './home.style';
import {
  NotificationIcon,
  PlayIcon,
  SearchIcon,
} from '../../../public/assets/icons';
import {horrorPodcast, popularPodcast, trendingPodcast} from '../../constants';

// import library tambahan untuk membuat efek blur di background
import {BlurView} from '@react-native-community/blur';

import Ionicons from 'react-native-vector-icons/Ionicons';

// import AsyncStorage untuk menyimpan data ke local storage
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  // state untuk inputan pada text input
  const [input, setInput] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // fungsi untuk menghandle inputan pada text input
  const onHandleClick = e => {
    // meng-set inputan ke state input
    setInput(e);
  };

  // fungsi untuk mengecek apakah item yang diklik sudah ada di local storage atau belum
  const isPodcastFavorite = item => {
    // cek apakah item yang diklik sudah ada di local storage atau belum
    // .some = untuk mengecek apakah ada item yang sama di dalam array atau tidak
    return favorites?.some(favorite => favorite?.id === item?.id);
  };

  const onHandleFavorite = async item => {
    try {
      // cek apakah item yang diklik sudah ada di local storage atau belum
      const storedItems = await AsyncStorage.getItem('horrorFavorite');

      // jika sudah ada, maka storedItems akan berisi array dari item yang sudah ada
      // jika belum ada, maka storedItems akan berisi null
      let favorites = storedItems ? JSON.parse(storedItems) : [];

      // cek apakah id dari item yang diklik sudah ada di local storage atau belum
      const index = favorites.findIndex(favorite => favorite.id === item.id);
      // jika sudah ada, maka index akan berisi index dari item yang sudah ada
      if (index !== -1) {
        // jika datanya sudah ada (double), maka hapus item dari array
        favorites.splice(index, 1);
      } else {
        // jika datanya belum ada, maka tambahkan item ke array
        favorites.push(item);
      }

      // simpan data ke local storage
      // JSON.stringify = untuk mengubah array menjadi string
      await AsyncStorage.setItem('horrorFavorite', JSON.stringify(favorites));

      // set state favorites dengan data terbaru
      setFavorites(favorites);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerWrapper}>
        {/* user detail */}
        <View style={styles.userContainer}>
          <TouchableOpacity style={styles.profile}>
            <Image
              source={userProfile}
              alt="user-profile"
              style={{width: '100%', height: '100%'}}
            />
          </TouchableOpacity>
          <View style={styles.profileInfo}>
            <Text style={styles.sayHello}>Hello, </Text>
            <Text style={styles.userName}>Ratna Komalasari</Text>
          </View>
        </View>
        {/* end__user-detail */}

        {/* notification */}
        <View>
          <TouchableOpacity
            style={styles.bellContainer}
            onPress={() => navigation.navigate('DetailsNotification')}>
            {/* notification=-icon */}
            <NotificationIcon />
          </TouchableOpacity>
        </View>
        {/* end__notification */}
      </View>

      {/* heading */}
      <View style={styles.headingTitleContainer}>
        <Text style={styles.headingTitle}>Listen The Favorite </Text>
        <Text style={styles.headingTitle}>Podcast</Text>
      </View>
      {/* end__heading */}

      {/* search */}
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
      {/* end__search */}

      {/* POPULAR PODCAST */}
      <View>
        {/* heading-podcast */}
        <View style={styles.popularPodcastHeading}>
          <Text style={styles.popularPodcastTitle}>Popular Podcast</Text>
          <TouchableOpacity>
            <Text>View all</Text>
          </TouchableOpacity>
        </View>
        {/* end__heading-podcast */}

        {/* podcast-list */}
        <FlatList
          // data = data yang akan di tampilkan
          data={popularPodcast}
          // contentContainerStyle = style untuk container dari flatlist
          contentContainerStyle={styles.popularPodcastList}
          // horizontal = untuk menampilkan data secara horizontal
          horizontal={true}
          // renderItem = untuk menampilkan data, untuk nama "item" bisa di ganti/ bebas
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.popularPodcastListImageContainer}>
                <Image
                  // source = untuk menampilkan gambar/ data dari image
                  source={item.image}
                  // alt = untuk menampilkan text ketika gambar tidak muncul
                  alt={item.title}
                  style={{height: '100%'}}
                />
              </View>
              <View style={styles.popularPodcastListDescContainer}>
                {/* BlurView = pake library tambahan, untuk membuat efek blur di background */}
                <BlurView blurType="light">
                  <View>
                    <Text style={styles.popularPodcastListTitle}>
                      {item.title}
                    </Text>
                    <Text style={styles.popularPodcastListStudio}>
                      {item.studio}
                    </Text>
                  </View>
                </BlurView>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* END__POPULAR PODCAST */}

      {/* TRENDING PODCAST */}
      <View>
        {/* heading-podcast */}
        <View style={styles.trendingPodcastHeading}>
          <Text style={styles.trendingPodcastTitle}>Trending Podcast</Text>
          <TouchableOpacity>
            <Text>View all</Text>
          </TouchableOpacity>
        </View>
        {/* end__heading-podcast */}

        {/* podcast-list */}
        <FlatList
          data={trendingPodcast}
          // scrollEnabled = untuk mengaktifkan scroll pada flatlist, karena disini saya pake scrollview maka saya matikan. jika tidak di matikan maka akan ada warning
          scrollEnabled={false}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.trendingPodcastListContent}>
                <View style={styles.trendingPodcastListImageContainer}>
                  <Image
                    source={item.image}
                    alt={item.title}
                    style={{height: '100%', width: '100%', borderRadius: 20}}
                  />
                </View>
                <View style={styles.trendingPodcastListDescContainer}>
                  <View>
                    <Text style={styles.trendingPodcastListTitle}>
                      {item.title}
                    </Text>
                    <Text style={styles.trendingPodcastListStudio}>
                      {item.studio}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.playIcon}>
                    <PlayIcon />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* END__TRENDING PODCAST */}

      {/* HORROR PODCAST */}
      <View>
        {/* heading-podcast */}
        <View style={styles.horrorPodcastHeading}>
          <Text style={styles.horrorPodcastTitle}>Horror Podcast</Text>
          <TouchableOpacity>
            <Text>View all</Text>
          </TouchableOpacity>
        </View>

        {/* podcast-list */}
        <FlatList
          data={horrorPodcast}
          scrollEnabled={false}
          style={{marginBottom: 50}}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.horrorPodcastListContent}>
                <View style={styles.horrorPodcastListImageContainer}>
                  <Image
                    source={{uri: item.image}}
                    alt={item.title}
                    style={{height: '100%', width: '100%', borderRadius: 20}}
                  />
                </View>
                <View style={styles.horrorPodcastListDescContainer}>
                  <View>
                    <Text style={styles.horrorPodcastListTitle}>
                      {item.title}
                    </Text>
                    <Text style={styles.horrorPodcastListStudio}>
                      {item.time}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.playIcon}
                    // onPress = untuk menghandle event ketika di klik
                    onPress={() => onHandleFavorite(item)}>
                    {isPodcastFavorite(item) ? (
                      <Ionicons name="heart" size={24} color="red" />
                    ) : (
                      <Ionicons name="heart-outline" size={24} color="black" />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* end__podcast-list */}
      </View>
      {/* end__heading-podcast */}

      {/* END__HORROR PODCAST */}
    </ScrollView>
  );
};

export default Home;
