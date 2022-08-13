import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { walletOperations, walletSelectors } from "redux/wallet";
import { currencies } from "assets/currencies";
import { modalStyle } from "components/styles/styles";
import { toast } from "react-hot-toast";

export const ModalAddAmount = ({
  idCard = null,
  modalAction,
  modalAddAmount,
  setModalAddAmount,
}) => {
  const allCards = useSelector(walletSelectors.getCards);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const cash = useSelector(walletSelectors.getCash);

  let temp;

  let currentCurrencies;
  if (idCard) {
    temp = allCards.find((el) => {
      return String(el.cardNumber) === idCard ? el : null;
    });

    currentCurrencies = [{ value: temp.currency, label: temp.currency }];
  } else {
    currentCurrencies =
      modalAction === "deposit"
        ? currencies
        : Object.entries(cash).map((el) => {
            return { label: el[0], value: el[0] };
          });
  }

  const [currency, setCurrency] = useState(currentCurrencies[0].label);

  const handleClose = () => {
    setModalAddAmount(false);
  };

  const onChangeCurrency = (e) => {
    setCurrency(e.currentTarget.value);
  };

  const onChangeAmount = (e) => {
    setAmount(Number(e.target.value));
  };

  const onClickAccept = () => {
    if (modalAction === "withdraw") {
      if (amount < 0) {
        toast.error("Antung!!! The negative number");
        return;
      }
      if (amount > cash[currency]) {
        toast.error("Antung!!! You don't have that much money ");
        return;
      }
      if (amount > temp.amount) {
        toast.error("Antung!!! You don't have that much money ");
        return;
      }

      if (!idCard)
        dispatch(walletOperations.downAmountCash({ currency, amount }));
      else {
        dispatch(walletOperations.downAmountCard({ idCard, amount }));
      }
      handleClose();
      return;
    }

    if (!idCard) dispatch(walletOperations.addAmountCash({ currency, amount }));
    else dispatch(walletOperations.addAmountCard({ idCard, amount }));

    handleClose();
  };

  return (
    <Modal
      open={modalAddAmount}
      onClose={handleClose}
      aria-labelledby={modalAction}
    >
      <Box sx={modalStyle}>
        <Typography
          sx={{ fontWeight: "bold" }}
        >{`Enter the amount to ${modalAction}`}</Typography>
        <Box>
          <TextField
            id="standard-select-currency-native"
            select
            value={currency}
            onChange={onChangeCurrency}
            SelectProps={{
              native: true,
            }}
            helperText="Select your currency"
            variant="standard"
            sx={{ mr: "10px" }}
          >
            {currentCurrencies.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>

          <TextField
            placeholder="0"
            onChange={onChangeAmount}
            helperText="InputAmount"
            variant="standard"
            type="number"
            min="0"
          ></TextField>
        </Box>

        <Box>
          <Button
            onClick={handleClose}
            variant="contained"
            size="small"
            sx={{ mr: "10px" }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => onClickAccept()}
            variant="contained"
            size="small"
          >
            Accept
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
