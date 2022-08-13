import { Button, Box } from "@mui/material";
import { CardFace } from "components/cardFace";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ModalAddAmount } from "components/modalAddAmount";
import { walletOperations } from "redux/wallet";

export const CardItem = ({ el }) => {
  const [idCard, setIdCard] = useState("");
  const [modalAddAmount, setModalAddAmount] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const dispatch = useDispatch();

  const onClickOpenModalAddAmount = (e) => {
    setModalAction("deposit");
    setIdCard(e.target.id);
    setModalAddAmount(true);
  };
  const onClickOpenModalDownAmount = (e) => {
    setModalAction("withdraw");
    setIdCard(e.target.id);
    setModalAddAmount(true);
  };

  const onClickDelete = (e) => {
    const idCard = e.target.id;
    dispatch(walletOperations.deleteCard({ idCard }));
  };

  return (
    <Box>
      <CardFace el={el} />
      <Button
        variant="contained"
        size="small"
        sx={{ mr: "5px" }}
        key="add"
        id={el.cardNumber}
        onClick={onClickOpenModalAddAmount}
      >
        Deposit
      </Button>
      <Button
        variant="contained"
        size="small"
        sx={{ mr: "5px" }}
        id={el.cardNumber}
        onClick={onClickOpenModalDownAmount}
      >
        Withdraw
      </Button>
      <Button
        variant="contained"
        color="error"
        size="small"
        id={el.cardNumber}
        onClick={onClickDelete}
      >
        Delete
      </Button>
      {modalAddAmount && (
        <ModalAddAmount
          idCard={idCard}
          modalAction={modalAction}
          modalAddAmount={modalAddAmount}
          setModalAddAmount={setModalAddAmount}
        />
      )}
    </Box>
  );
};
