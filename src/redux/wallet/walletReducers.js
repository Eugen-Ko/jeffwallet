import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import walletActions from './walletActions';

const cardInitialState = {
  cards: [
    {
      cardNumber: 1234567891234567,
      expData: "02/25",
      cv: "",
      cardHolder: "",
      amount: 1000,
      currency: "UAH",
      bankName: "JPMORGAN CHASE BANK, N.A.",
      scheme: "visa",
      type: "NoName",
    },
    {
      cardNumber: 4627100101654724,
      expData: "03/24",
      cv: "",
      cardHolder: "",
      amount: 2000,
      currency: "EUR",
      bankName: "BALTIYSKIY BANK",
      scheme: "visa",
      type: "debit",
    },
    {
      cardNumber: 4486441729154030,
      expData: "03/69",
      cv: "",
      cardHolder: "",
      amount: 3000,
      currency: "UAH",
      bankName: "NoName",
      scheme: "visa",
      type: "NoName",
    }
  ]
}

const cashInitialState = {};

const cardState = createReducer(cardInitialState, {
  [walletActions.addCardSuccess]: (state, { payload }) => {
    return { ...state, cards: [...state.cards, { ...payload }] }
  },

  [walletActions.addAmountCardSuccess]: (state, { payload }) => {
    return {
      ...state, cards: state.cards.map(el => String(el.cardNumber) === String(payload.idCard)
        ? { ...el, amount: el.amount + payload.amount }
        : el)
    }
  },
  [walletActions.downAmountCardSuccess]: (state, { payload }) => {
    return {
      ...state, cards: state.cards.map(el => String(el.cardNumber) === String(payload.idCard)
        ? { ...el, amount: el.amount - payload.amount }
        : el)
    }
  },
  [walletActions.deleteCardSuccess]: (state, { payload }) => {
    return { ...state, cards: [...state.cards.filter(el => String(el.cardNumber) !== String(payload.idCard))] }
  }
},
);

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