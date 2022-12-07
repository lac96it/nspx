import { combineReducers } from 'redux';

import authReducer from './auth';

const combinedReducer = combineReducers({
  auth: authReducer,
});

export const rootReducer = (state, action) => {

  if (action.type === 'auth/logout') {
    return combinedReducer({}, action);
  }

  return combinedReducer(state, action);
}