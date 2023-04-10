import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isimenu: [
        {
          title: 'Pre Test',
          icon: 'envelope-open-text',
          press: 'PreTest',
        },
        {
          title: 'Materi Siperbal',
          icon: 'shield-virus',
          press: 'Materi',
        },
        {
          title: 'Pos Test',
          icon: 'check-double',
          press: 'PostTest',
        },
        {
          title: 'About Siperbal',
          icon: 'copyright',
          press: 'About',
        },
      ],
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#6E85B7" />
        <View
          style={{
            backgroundColor: '#FFFF',
            paddingVertical: 15,
            elevation: 3,
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            {/* <Icon
              style={{marginRight: 10}}
              name="angle-left"
              size={25}
              color="#7FB5FF"
            /> */}
          </TouchableOpacity>

          <Text
            style={{
              color: '#7FB5FF',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Halaman Menu
          </Text>
        </View>

        <View style={{flex: 1, backgroundColor: '#C4DDFF'}}></View>
      </View>
    );
  }
}

export default Menu;
