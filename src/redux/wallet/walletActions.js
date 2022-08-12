import { createAction } from '@reduxjs/toolkit';

const addCardSuccess = createAction('wallet/addCardSuccess');
const addAmountCashSuccess = createAction('wallet/addAmountCashSuccess');
const downAmountCashSuccess = createAction('wallet/downAmountCashSuccess');
const addAmountCardSuccess = createAction('wallet/addAmountCashSuccess');
const downAmountCardSuccess = createAction('wallet/downAmountCashSuccess');
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
