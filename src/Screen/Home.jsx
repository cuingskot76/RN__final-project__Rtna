import React, {Component} from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import Menu from './Menu';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#6E85B7" />

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'salmon',
            marginTop: 50,
          }}>
          {/* <Image
            source={require('../images/LogoSiperbal.png')}
            style={{width: 300, height: 300, marginBottom: 100}}
          /> */}

          <TouchableOpacity
            style={{
              backgroundColor: '#7FB5FF',
              paddingVertical: 15,
              paddingHorizontal: 20,
              borderRadius: 30,
              alignContent: 'center',
              elevation: 7,
            }}
            onPress={() => this.props.navigation.navigate('Menu')}>
            {/* <Icon style={{alignContent:'center'}} name="angle-right" size={30} color="#FFFF" /> */}

            <Text
              style={{
                color: 'red',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              MULAI
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
