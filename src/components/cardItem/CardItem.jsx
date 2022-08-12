import { Button, Box } from "@mui/material";
import { CardFace } from "components/cardFace";
import { useState } from "react";
import { ModalAddAmount } from "components/modalAddAmount";

export const CardItem = ({ el }) => {
  const [idCard, setIdCard] = useState("");
  const [modalAddAmount, setModalAddAmount] = useState(false);
  const [modalAction, setModalAction] = useState(null);

  const onClickOpenModalAddAmount = (e) => {
    setIdCard(e.target.id);
    setModalAddAmount(true);
  };
  return (
    <Box>
      <CardFace el={el} />
      <Button
        variant="contained"
        size="small"
        sx={{ mr: "5px" }}
        id={el.cardNumber}
        onClick={(e) => {
          setModalAction("deposit");
          onClickOpenModalAddAmount(e);
        }}
      >
        Deposit
      </Button>
      <Button variant="contained" size="small" sx={{ mr: "5px" }}>
        Withdraw
      </Button>
      <Button variant="contained" color="error" size="small">
        Delete
      </Button>
      {modalAddAmount && (
        <ModalAddAmount
          // idCard={idCard}
          modalAction={modalAction}
          modalAddAmount={modalAddAmount}
          setModalAddAmount={setModalAddAmount}
        />
      )}
    </Box>
  );
};
