import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';
import {
  userAuth,
  accounts
} from './reducers';

const rootReducer = combineReducers({
  userAuth,
  accounts,
});

const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
);

const devToolsWrappedMiddleware = composeWithDevTools({
  realtime: true
})(middleware); // for react-native

export default createStore(rootReducer, devToolsWrappedMiddleware);
export * from './actions';
export * from './reducers';
