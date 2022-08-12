import walletActions from './walletActions';

const addCard = (card) => dispatch => {
  console.log(card);
  dispatch(walletActions.addCardSuccess(card));
}

const addAmountCash = (amount) => dispatch => {
  dispatch(walletActions.addAmountCashSuccess(amount));
}

const downAmountCash = (amount) => dispatch => {
  dispatch(walletActions.downAmountCashSuccess(amount));
}

const walletOperations = {
  addCard,
  addAmountCash,
  downAmountCash,
}

export default walletOperations
