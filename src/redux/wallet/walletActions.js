import { createAction } from '@reduxjs/toolkit';

const addCardSuccess = createAction('wallet/addCardSuccess');
const addAmountCashSuccess = createAction('wallet/addAmountCashSuccess');
const downAmountCashSuccess = createAction('wallet/downAmountCashSuccess');

const walletActions = {
  addCardSuccess,
  addAmountCashSuccess,
  downAmountCashSuccess,
};
export default walletActions;
