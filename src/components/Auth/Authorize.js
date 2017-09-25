import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {LoginForm, LogoutButton} from '../../components';

const Authorize = ({isAuthenticated}) => {
  return (
      <View style = {{flex: 1}} >
        {isAuthenticated
          ? <LogoutButton />
          : <LoginForm />
        }
      </View>
  )
}

const mapState = ({userAuth: {isAuthenticated}}) => ({
  isAuthenticated
})

export default connect(mapState, null)(Authorize);
