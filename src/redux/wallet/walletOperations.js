import walletActions from './walletActions';

const addCard = (card) => dispatch => {
  dispatch(walletActions.addCard(card));
}

const raceOperations = {
  addCard,
}

export default raceOperations
