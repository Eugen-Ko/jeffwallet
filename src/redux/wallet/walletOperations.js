import walletActions from './walletActions';

const addCard = (card) => dispatch => {
  dispatch(walletActions.addCard(card));
}

const addAmountCash = (amount) => dispatch => {
  dispatch(walletActions.addAmountCashSuccess(amount));
}

const downAmountCash = (amount) => dispatch => {
  dispatch(walletActions.downAmountCashSuccess(amount));
}

const raceOperations = {
  addCard,
  addAmountCash,
  downAmountCash,
}

export default raceOperations
