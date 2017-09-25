import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import store from '../../redux';

import {
  FORM_FIELD_CHANGED,
  AUTH_FORM_SUBMITTED,
  USER_AUTHENTICATED,
  USER_LOGGED_OUT,
  AUTH_ERROR,
  SET_FORM_MODE,
  USER_NOT_FOUND,

} from './actionTypes';

export const updateFormFieldByName = (fieldName, input) => ({
  type: FORM_FIELD_CHANGED,
  fieldName,
  input,
})

export const submitAuthForm = () => ({
  type: AUTH_FORM_SUBMITTED,
})

export const userAuthSuccess = () => ({
  type: USER_AUTHENTICATED
})

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
})

export const userNotFound = () => ({
  type: USER_NOT_FOUND
})

export const showAuthError = (errorMsg) => ({
  type: AUTH_ERROR,
  errorMsg
})

export const setFormMode = (mode) => ({
  type: SET_FORM_MODE,
  mode
})


// --------------- THUNKS ------------------------

export const authenticateUser = () => (dispatch) => {
  const {email, password} = store.getState().userAuth;
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(success => dispatch(userAuthSuccess()))
    .then(() => Actions.main()) // navigation/router
    .catch(err => {
      if (err.code === 'auth/user-not-found') {
        dispatch(userNotFound())
      } else {
        dispatch(showAuthError(err.message));
      }
    })
}

export const signUpNewUser = () => dispatch  => {
  const {email, password} = store.getState().userAuth;
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      dispatch(userAuthSuccess())
    })
    .catch(err => {
      dispatch(showAuthError(err));
    })
}


export const logOutUser = () => dispatch => {
  return firebase.auth().signOut()
    .then(() => {
      dispatch(userLoggedOut())
    })
    .catch(err => {
      console.error(err);
    })
}
