import walletActions from './walletActions';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BASEURL } from 'assets/settings';

const makeCardInfo = (card, addInfo) => {
  return {
    cardNumber: card.cardNumber,
    expData: card.expData,
    cv: card.cv,
    cardHolder: card.cardHolder && 'NoName',
    amount: card.amount,
    currency: card.currency,
    bankName: addInfo.bank.name && 'NoName',
    scheme: addInfo.scheme && 'NoName',
    type: addInfo.type && 'NoName',
  }
}

const addCard = (card) => async (dispatch) => {
  try {
    const addInfo = await axios.get(`${BASEURL}${String(card.cardNumber).slice(0, 7)}`)
    dispatch(walletActions.addCardSuccess(makeCardInfo(card, addInfo.data)));
  }
  catch (error) { toast.error(`${error.message}`) }
}

const addAmountCard = ({ idCard, amount }) => dispatch => {
  dispatch(walletActions.addAmountCardSuccess({ idCard, amount }))
}

const downAmountCard = ({ idCard, amount }) => dispatch => {
  dispatch(walletActions.downAmountCardSuccess({ idCard, amount }))
}

const deleteCard = ({ idCard }) => dispatch => {
  dispatch(walletActions.deleteCardSuccess({ idCard }))
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
  addAmountCard,
  downAmountCard,
  deleteCard,
}

export default walletOperations
