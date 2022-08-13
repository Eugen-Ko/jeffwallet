import { createAction } from '@reduxjs/toolkit';

const addCardSuccess = createAction('wallet/addCardSuccess');
const addAmountCashSuccess = createAction('wallet/addAmountCashSuccess');
const downAmountCashSuccess = createAction('wallet/downAmountCashSuccess');

const addAmountCardSuccess = createAction('wallet/addAmountCardSuccess');
const downAmountCardSuccess = createAction('wallet/downAmountCardSuccess');
const deleteCardSuccess = createAction('wallet/deleteCardSuccess');

const walletActions = {
  addCardSuccess,
  addAmountCashSuccess,
  downAmountCashSuccess,
  addAmountCardSuccess,
  downAmountCardSuccess,
  deleteCardSuccess,
};
export default walletActions;
