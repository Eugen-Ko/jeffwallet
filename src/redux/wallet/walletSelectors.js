const getCards = state => state.wallet.cardState.cards;
const getCash = state => state.wallet.cashState;

const raceSelectors = {
  getCards,
  getCash,
}

export default raceSelectors;
