import { createAction } from '@reduxjs/toolkit';

const addCardSuccess = createAction('wallet/addCardSuccess');

const walletActions = {
  addCardSuccess
};
export default walletActions;
