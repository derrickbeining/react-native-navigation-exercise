import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native';
import AccountListItem from './AccountListItem';
import {fetchUserAccounts} from '../../redux';

class AccountList extends Component {

  componentWillMount() {
    fetch('http://localhost:8000/get_access_token', {
      method: 'POST'
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        throw new Error(data.error.msg)
      }
      else {
        console.log('Access token retrieved')
        return this.props.fetchUserAccounts();
      }
    })
    .catch(err => console.warn(err))

  }

  render() {
    const {accounts} = this.props;
      return (
        <ScrollView>
          {accounts.map(account => (
            <AccountListItem
              key={account.id}
              account={account}
            />))
          }
        </ScrollView>
    )
  }
}


const mapState = ({accounts}) => ({
  accounts
});

const mapDispatch = {
  fetchUserAccounts,
};

export default connect(mapState, mapDispatch)(AccountList);
