import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import walletActions from './walletActions';

const cardInitialState = {};

const cashInitialState = {};

const cardState = createReducer(cardInitialState, {
  // [walletActions.addAmountCashSuccess]: (state, { payload }) => {
  //   console.log(payload);
  //   return { ...state, cash: payload[1] }
  // },
});


const cashState = createReducer(cashInitialState, {
  [walletActions.addAmountCashSuccess]: (state, { payload }) => {
    return { ...state, [payload.currency]: state[payload.currency] ? state[payload.currency] + payload.amount : payload.amount }
  },
  [walletActions.downAmountCashSuccess]: (state, { payload }) => {
    let k = {}
    if (state[payload.currency] - payload.amount > 0) {
      k = { ...state, [payload.currency]: state[payload.currency] - payload.amount }
    } else {
      k = { ...state }
      delete k[payload.currency]
    }
    return k

  }

});

// const loading = createReducer(false, {
// });

// const error = createReducer(null, {
// });

export default combineReducers({
  cardState,
  cashState,
  // loading,
  // error,
});