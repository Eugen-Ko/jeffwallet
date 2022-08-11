import { useState } from "react";
import { Box, Button } from "@mui/material";
import { ModalAddAmount } from "components/modalAddAmount";

export const AmountCash = () => {
  const [modalAddAmount, setModalAddAmount] = useState(false);
  const [modalAction, setModalAction] = useState(null);

  const onClickOpenModalAddAmount = () => {
    setModalAddAmount(true);
  };
  return (
    <>
      <Box sx={{ marginBottom: "15px" }}>
        Amount of cash
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
          variant="contained"
          size="small"
          onClick={() => {
            setModalAction("withdraw");
            onClickOpenModalAddAmount();
          }}
        >
          withdraw
        </Button>
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
