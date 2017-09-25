import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

const ButtonDefault = ({ children, content, onPress }) => {
  const { buttonDefault, buttonText } = styles;
  return (

    <TouchableOpacity
      onPress={onPress}
      style={buttonDefault}
    >
      <Text style={buttonText}>
        {children || content}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonDefault: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  }
};

export default ButtonDefault;
