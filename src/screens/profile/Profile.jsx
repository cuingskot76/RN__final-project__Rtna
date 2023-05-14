import React, {Component} from 'react';
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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Welcome My Profile',
      value: true,
      username: '',
    };
  }

  jikaKembali = () => {
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

  componentDidMount() {
    this.BackHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.jikaKembali,
    );
  }

  componentWillUnmount() {
    this.BackHandler.remove();
  }

  render() {
    return (
      <ScrollView style={tampilan.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#8B9A46" />
        <View style={tampilan.headcop}>
          <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 18}}>
            {this.state.header}
          </Text>
        </View>
        <TouchableOpacity
          style={tampilan.kontainergambar}
          onPress={() => console.log('Hello')}>
          {/* <Image
          source={require('./src/images/Gambar1.jpg')}
          style={tampilan.gambar}
          /> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={tampilan.kontainergambar}
          onPress={() =>
            Alert.alert('Gambar', 'Gambar Mobil', [
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
        <View style={tampilan.latar}>
          <View style={tampilan.teks}>
            <Text
              style={{
                alignContent: 'center',
                color: '#FFFBF5',
                alignItems: 'center',
              }}>
              Hello, my name is Lala. I am student collage in University
              Muhammadiyah Purwokerto. My life skill i'm eager to learn and to
              do something new.
            </Text>
          </View>
          <TextInput
            value={this.state.username}
            style={tampilan.inputtext}
            onChangeText={value => this.setState({username: value})}
          />
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../Images/aku.png')}
              style={tampilan.gambar}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

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
export default App;
