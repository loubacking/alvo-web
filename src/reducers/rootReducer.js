import { combineReducers } from 'redux';
import unique from './index';
import initialState from './initialState';

const appReducer = combineReducers({
  unique
});

const rootReducer = (state, action) => {
  if (action.type === 'NO_TOKEN') {
    state = {
      ...initialState
    };
  }

  return appReducer(state, action);
};

export default rootReducer;