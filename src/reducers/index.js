import { combineReducers } from 'redux';
import userReducer from  './userReducer';
import userSelectedReducer from './userSelectedReducer';
import foodReducer from './foodReducer'

// here we import both reducers and combine them
const rootReducer = combineReducers({
  //state: (state = {}) => state
  users: userReducer,
  importedKeyForSelect: userSelectedReducer,  // here is where you define the key for store?
  foods: foodReducer
});

export default rootReducer;
