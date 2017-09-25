import React from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, ButtonDefault} from '../../components';
import {logOutUser} from '../../redux';

const LogoutButton = (props) => {
  return (
    <Card>
      <CardSection>
        <ButtonDefault
          content="Logout"
          onPress={props.logOutUser}
        />
     </CardSection>
   </Card>
  )
}

const mapDispatch = {
  logOutUser
};

export default connect(null, mapDispatch)(LogoutButton);
