import React from 'react';
import {TextInputField} from '../../components';

const EmailInput = ({value, onChangeText}) => {
  return (

      <TextInputField
        label={'Email'}
        value={value}
        onChangeText={onChangeText}
        placeholder="user@email.com"
        autoCorrect={false}
        autoCapitalize="none"
        autoFocus
        clearButtonMode="while-editing"
      />

  )
}

export default EmailInput;
