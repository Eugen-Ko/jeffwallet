const getCards = state => state.wallet.walletState.cards;
const getCash = state => state.wallet.walletState.cash;

const raceSelectors = {
  getCards,
  getCash,
}

export default raceSelectors;
