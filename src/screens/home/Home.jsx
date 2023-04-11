import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import userProfile from '../../../public/assets/images/aku.jpg';
import styles from './home.style';
import {NotificationIcon} from '../../../public/assets/icons';

const Home = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
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
        <View>
          <TouchableOpacity style={styles.bellContainer}>
            <NotificationIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
