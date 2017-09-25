import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import Routes from './router';
import {Header, Authorize} from './components';
import store from './redux';
import secrets from '../secrets';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(secrets.firebaseConfig)
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <Routes />
        </View>
      </Provider>
    )
  }
}

export default App;
