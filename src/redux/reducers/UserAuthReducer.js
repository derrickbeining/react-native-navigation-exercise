import {
  FORM_FIELD_CHANGED,
  AUTH_FORM_SUBMITTED,
  USER_AUTHENTICATED,
  USER_LOGGED_OUT,
  SHOW_NOTIFICATION,
  AUTH_ERROR,
  SET_FORM_MODE,
  USER_NOT_FOUND,
} from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
  notificationMsg: '',
  errorMsg: '',
  isLoading: false,
  mode: 'Login', // else 'Signup'
  isAuthenticated: false,
}

const UserAuthReducer = (userAuth = INITIAL_STATE, action) => {
  const {fieldName, input, message, mode, isAuthenticated, isLoading, errorMsg, notificationMsg} = action;
  switch (action.type) {
    case FORM_FIELD_CHANGED:
      return {
        ...userAuth,
        [fieldName]: input,
        mode: 'Login',
        notificationMsg: '',
        errorMsg: '',
      };
    case AUTH_FORM_SUBMITTED:
      return {...userAuth, errorMsg: '', notificationMsg: '', isLoading: true};
    case AUTH_ERROR:
      return {...userAuth, errorMsg, isLoading: false}
    case SET_FORM_MODE:
      return {...userAuth, mode: mode}
    case USER_AUTHENTICATED:
      return {
        ...userAuth,
        email: '',
        password: '',
        isAuthenticated: true,
        isLoading: false,
        mode: 'Login'
      };
    case USER_LOGGED_OUT:
      return {...userAuth, isAuthenticated: false, };
    case USER_NOT_FOUND:
    const notificationMsg = `No such user. Would you like to sign up?`;
      return {...userAuth, mode: 'Signup', isLoading: false, notificationMsg};
    default:
      return userAuth;
  }
}

export default UserAuthReducer;
