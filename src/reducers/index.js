import { combineReducers } from 'redux';
import userReducer from  './userReducer';
import userSelectedReducer from './userSelectedReducer';

// here we import both reducers and combine them
const rootReducer = combineReducers({
  //state: (state = {}) => state
  users: userReducer,
  importedKeyForSelect: userSelectedReducer  // here is where you define the key for store?
});

export default rootReducer;
