import React from 'react';
import { TextInputField } from '../../components';

const PasswordInput = ({value, onChangeText}) => {
  return (

    <TextInputField
      label={'Password'}
      value={value}
      placeholder="p@s$w0rd"
      onChangeText={onChangeText}
      autoCorrect={false}
      autoCapitalize="none"
      clearButtonMode = "while-editing"
      secureTextEntry
    />

  )
}

export default PasswordInput;
