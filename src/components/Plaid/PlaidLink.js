import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import Link 'react-plaid-link';
import PlaidAuthenticator from 'react-native-plaid-link';
import {Actions} from 'react-native-router-flux';
import secrets from '../../../secrets';
const {
  CLIENT_ID,
  SECRET,
  PUBLIC_KEY,
  PLAID_ENV,
} = secrets.plaidAPI;


export default class PlaidLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  render() {
    return this.state.data.action &&
      this.state.data.action.indexOf('::connected') !== -1
      ? this.renderLogin()
      : this.renderLogin();
  }

  renderLogin() {
    return (
      <PlaidAuthenticator
        clientName="Budgetr App"
        onMessage={this.onMessage.bind(this)}
        publicKey={PUBLIC_KEY}
        env="sandbox"
        product="auth,transactions"
      />
    );
  }

  onMessage(data) {
    if (data.action && data.action.indexOf('::connected') !== -1) {
      Actions.accounts();
    }
    console.log(data);
    this.setState({ data });
    /*
      Response example for success
      {
        "action": "plaid_link-undefined::connected",
        "metadata": {
          "account": {
            "id": null,
            "name": null
          },
          "account_id": null,
          "public_token": "public-sandbox-e697e666-9ac2-4538-b152-7e56a4e59365",
          "institution": {
            "name": "Chase",
            "institution_id": "ins_3"
          }
        }
      }
    */
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  },
  value: {
    marginBottom: 20,
    textAlign: 'center'
  }
});


///////////////////////////////////////////////////////////

// const PlaidLink = React.createClass({
//   handleOnSuccess: function(token, metadata) {
//     // send token to client server
//   },
//   handleLoad: function() { console.log('Link loaded') },
//   render: function() {
//     return (
//       <PlaidLink
//         publicKey={PUBLIC_KEY}
//         product={["auth", "transactions"]}
//         env="sandbox"
//         clientName="budgetr"
//         onSuccess={this.handleOnSuccess}
//         onLoad={this.handleLoad}
//       />
//     );
//   }
// })
