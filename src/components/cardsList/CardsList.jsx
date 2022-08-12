import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { CardItem } from "components/cardItem";
import { walletSelectors } from "redux/wallet";

export const CardsList = () => {
  const allCards = useSelector(walletSelectors.getCards);

  return (
    <Box>
      {allCards.map((el) => (
        <CardItem key={String(el.cardNumber)} el={el} />
      ))}
    </Box>
  );
};
