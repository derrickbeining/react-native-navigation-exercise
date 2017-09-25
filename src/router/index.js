import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {
  Authorize,
  TransactionList,
  PlaidLink,
  AccountList,
} from '../components';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65}}>
      <Scene initial key="auth">
        <Scene key="login" component={Authorize} title="Login" />
      </Scene>
      <Scene key="main">
        <Scene key="bankAuth" component={PlaidLink} title="Authorize" />
        <Scene key="accounts" component={AccountList} title="Accounts" />
        <Scene
          key="transactionList"
          component={TransactionList}
          title="Transactions"
          rightTitle="Add"
          onRight={console.log('clicked')}
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent;
