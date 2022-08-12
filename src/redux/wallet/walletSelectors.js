const getCards = state => state.wallet.cardState;
const getCash = state => state.wallet.cashState;

const raceSelectors = {
  getCards,
  getCash,
}

export default raceSelectors;
