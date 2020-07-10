import { combineReducers } from 'redux';
import { dexReducer } from './dex';

const rootReducer = combineReducers({
  dex: dexReducer
});

export default rootReducer;