import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';

import {
  ButtonDefault,
  Card,
  CardSection,
  EmailInput,
  PasswordInput,
  Spinner
} from '../../components';
import store, {
  updateFormFieldByName,
  authenticateUser,
  signUpNewUser,
  submitAuthForm,
} from '../../redux';

class LoginForm extends Component {

  onSubmit() {
    const {mode} = store.getState().userAuth;
    this.props.submitAuthForm()
    if (mode === 'Login') {
      return this.props.authenticateUser();
    } else {
      return this.props.signUpNewUser();
    }
  }

  onChangeText(fieldName, input) {
    this.props.updateFormFieldByName(fieldName, input);
  }

  render() {
    const {
      email,
      password,
      errorMsg,
      notificationMsg,
      isLoading,
      mode
    } = this.props;
    const {errorText, notificationText} = styles;
    return (
      <Card>
        <CardSection>
          <EmailInput
            value={email}
            onChangeText={input => this.onChangeText('email', input)}
          />
        </CardSection>

        <CardSection>
          <PasswordInput
            value={password}
            onChangeText={input => this.onChangeText('password', input)}
          />
        </CardSection>

        {errorMsg
          ? <Text style={errorText}>{errorMsg}</Text>
          : null
        }

        {notificationMsg
          ? (<Text style={[errorText, notificationText]}>
              {notificationMsg}
            </Text>)
          : null
        }

        <CardSection>
          {isLoading
            ? <Spinner />
            : (<ButtonDefault
                  content={mode}
                  onPress={this.onSubmit.bind(this)}
                />)
          }
        </CardSection>

      </Card>
    )
  }
}

const styles = {
  errorText: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red',
    padding: 5
  },
  notificationText: {
    color: 'orange',
    fontSize: 16
  }
}

const mapState = ({
  userAuth: {
    email,
    password,
    errorMsg,
    notificationMsg,
    isLoading,
    mode,
  }
}) => ({
  email,
  password,
  errorMsg,
  notificationMsg,
  isLoading,
  mode,
})

const mapDispatch = {
  updateFormFieldByName,
  submitAuthForm,
  authenticateUser,
  signUpNewUser,
}

export default connect(mapState, mapDispatch)(LoginForm);
