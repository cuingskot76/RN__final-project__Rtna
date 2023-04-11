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
import {NotificationIcon, SearchIcon} from '../../../public/assets/icons';
import {popularPodcast} from '../../constants';

const Home = () => {
  // state untuk inputan pada text input
  const [input, setInput] = useState('');

  // fungsi untuk menghandle inputan pada text input
  const onHandleClick = e => {
    // meng-set inputan ke state input
    setInput(e);
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
          <TouchableOpacity style={styles.bellContainer}>
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
      <View style={styles.searchContainer}>
        <TextInput
          value={input}
          onChangeText={onHandleClick}
          placeholder="Search podcast"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
      {/* end__search */}

      {/* POPULAR PODCAST */}
      <View style={styles.popularPodcastContainer}>
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
          data={popularPodcast}
          contentContainerStyle={styles.popularPodcastList}
          horizontal={true}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.popularPodcastListImageContainer}>
                <Image
                  source={item.image}
                  alt={item.title}
                  style={{height: '100%'}}
                />
              </View>
              <View style={styles.popularPodcastListDesc}>
                <Text>{item.title}</Text>
                <Text>{item.studio}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* END__POPULAR PODCAST */}
    </ScrollView>
  );
};

export default Home;
