import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import { ModalAddAmount } from "components/modalAddAmount";
import { walletSelectors } from "redux/wallet";

export const AmountCash = () => {
  const [modalAddAmount, setModalAddAmount] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const cash = useSelector(walletSelectors.getCash);

  const onClickOpenModalAddAmount = () => {
    setModalAddAmount(true);
  };
  return (
    <>
      <Box sx={{ marginBottom: "15px" }}>
        Amount of cash:
        <Button
          variant="contained"
          size="small"
          sx={{ mr: "5px" }}
          onClick={() => {
            setModalAction("deposit");
            onClickOpenModalAddAmount();
          }}
        >
          deposit
        </Button>
        <Button
          disabled={Object.keys(cash).length === 0 ? true : false}
          variant="contained"
          size="small"
          onClick={() => {
            setModalAction("withdraw");
            onClickOpenModalAddAmount();
          }}
        >
          withdraw
        </Button>
        <Box>
          {Object.entries(cash).map((el) => (
            <Typography key={el[0]}>
              {el[0]}: {el[1]}
            </Typography>
          ))}
        </Box>
      </Box>
      {modalAddAmount && (
        <ModalAddAmount
          modalAction={modalAction}
          modalAddAmount={modalAddAmount}
          setModalAddAmount={setModalAddAmount}
        />
      )}
    </>
  );
};
