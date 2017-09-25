import React from 'react';
import {TextInput, View, Text} from 'react-native';

const TextInputField = (props) => {
  const {label} = props;
  const {inputContainer, inputLabel, inputField} = styles;
  return (
    <View style={inputContainer}>
      <Text style={inputLabel}>{label}</Text>
      <TextInput  style={inputField} {...props} />
    </View>
  )
}

const styles = {
  inputField: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  inputLabel: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputContainer: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export default TextInputField;
