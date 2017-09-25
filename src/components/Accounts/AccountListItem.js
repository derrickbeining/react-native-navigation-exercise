import React from 'react';
import {Text} from 'react-native';
import {Card, CardSection} from '../../components';

const AccountListItem = ({account}) => {
  return (
    <Card>
      <CardSection>
        <Text>{account}</Text>
      </CardSection>
    </Card>
  )
}

export default AccountListItem;
