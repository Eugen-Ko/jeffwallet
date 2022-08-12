import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { walletSelectors } from "redux/wallet";

const createBalance = (allCard) => {
  const acc = {};
  allCard.forEach((el) => {
    acc[el.currency]
      ? (acc[el.currency] += Number(el.amount))
      : (acc[el.currency] = Number(el.amount));
  });
  return acc;
};

export const AmountCards = () => {
  const allCard = useSelector(walletSelectors.getCards);

  const balance = createBalance(allCard);

  return (
    <Box sx={{ marginBottom: "15px" }}>
      Amount of cards
      {Object.entries(balance).map((el) => (
        <Typography key={el[0]}>
          {el[0]}: {el[1]}
        </Typography>
      ))}
    </Box>
  );
};
