import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {StatusBar} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      {/* 
       StatusBar = untuk mengatur warna status bar 
       translucent = untuk membuat status bar menjadi transparan
       */}
      <StatusBar translucent={true} />
      <Router />
    </NavigationContainer>
  );
}

export default App;
