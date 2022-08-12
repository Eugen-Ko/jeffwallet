import { createAction } from '@reduxjs/toolkit';

const addCardSuccess = createAction('wallet/addCardSuccess');
const addAmountCashSuccess = createAction('wallet/addAmountCashSuccess');
const downAmountCashSuccess = createAction('wallet/downAmountCashSuccess');
const addAmountCardSuccess = createAction('wallet/addAmountCashSuccess');

const walletActions = {
  addCardSuccess,
  addAmountCashSuccess,
  downAmountCashSuccess,
  addAmountCardSuccess,
};
export default walletActions;
