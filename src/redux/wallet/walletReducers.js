import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import walletActions from './walletActions';

const walletInitialState = {
  cards: [],
  cash: [],
};

const walletState = createReducer(walletInitialState, {
  [walletActions.setPlayerNameSuccess]: (state, { payload }) => {
    return { ...state, playerName: payload }
  },
});

// const loading = createReducer(false, {
// });

// const error = createReducer(null, {
// });

export default combineReducers({
  walletState,
  // loading,
  // error,
});