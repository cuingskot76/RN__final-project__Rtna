/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// default punya kamu
// AppRegistry.registerComponent(appName, () => App);

// panggil file yg dari dosen
AppRegistry.registerComponent(appName, () => App);
