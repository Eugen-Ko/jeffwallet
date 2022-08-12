import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import { modalCardStyle } from "components/styles/styles";
import { currencies } from "assets/currencies";
import { walletOperations } from "redux/wallet";

const validateRegister = (values) => {
  const errors = {};
  if (!values.cardNumber) {
    errors.cardNumber = "Require";
  } else if ([...String(values.cardNumber)].length !== 16) {
    errors.cardNumber = "Wrong length card`s number";
  }
  if (!values.expData) {
    errors.expData = "Require";
  } else if (
    !/[0-1]{1}[0-9]{1}\/[2]{1}[0]{1}[2]{1}[2-9]{1}$/i.test(values.expData)
  ) {
    errors.expData = "Wrong exp data";
  }
  if (!values.cv) {
    errors.cv = "Require";
  } else if (!/[0-9]{3}$/i.test(values.cv)) {
    errors.cv = "Wrong CV";
  }
  if (!values.amount) {
    errors.amount = "Require";
  } else if (values.amount < 0) {
    errors.amount = "Wrong amount";
  }
  return errors;
};

export const ModalAddCard = ({ modalAddCard, setModalAddCard }) => {
  const [currency, setCurrency] = useState(currencies[0].value);
  const dispatch = useDispatch();

  const handleClose = () => {
    setModalAddCard(false);
  };

  const initialValues = {
    cardNumber: "",
    expData: "",
    cv: "",
    cardHolder: "",
    amount: "",
    currency: "",
  };

  const formik = useFormik({
    initialValues,
    validate: validateRegister,
    enableReinitialize: true,
    onSubmit: (
      { cardNumber, expData, cv, cardHolder, amount },
      { resetForm }
    ) => {
      console.log(currency);
      const card = {
        cardNumber,
        expData,
        cv,
        cardHolder,
        amount,
        currency: currency,
      };
      console.log(card);
      dispatch(walletOperations.addCard({ ...card }));
      resetForm({ initialValues });
    },
  });

  return (
    <Modal open={modalAddCard} onClose={handleClose} aria-labelledby="Add card">
      <Box sx={modalCardStyle}>
        <form color="black" onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: { xs: " 0 auto" },
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box sx={{ mb: "20px" }}>
              <Typography>Add card</Typography>
            </Box>
            <Box>
              <Box>
                <TextField
                  variant="standard"
                  name="cardNumber"
                  // label="Card Number"
                  placeholder="Card Number"
                  type="number"
                  value={formik.values.cardNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.cardNumber &&
                    Boolean(formik.errors.cardNumber)
                  }
                  helperText={
                    formik.touched.cardNumber && formik.errors.cardNumber
                  }
                />
              </Box>
              <Box>
                <TextField
                  variant="standard"
                  name="expData"
                  type="text"
                  label="Exp.Data"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.expData && Boolean(formik.errors.expData)
                  }
                  helperText={formik.touched.expData && formik.errors.expData}
                />
              </Box>
              <Box>
                <TextField
                  variant="standard"
                  name="cv"
                  type="text"
                  label="CV"
                  value={formik.values.cv}
                  onChange={formik.handleChange}
                  error={formik.touched.cv && Boolean(formik.errors.cv)}
                  helperText={formik.touched.cv && formik.errors.cv}
                />
              </Box>
              <Box>
                <TextField
                  variant="standard"
                  name="cardHolder"
                  type="text"
                  label="Card Holder"
                  value={formik.values.cardHolder}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.cardHolder &&
                    Boolean(formik.errors.cardHolder)
                  }
                  helperText={
                    formik.touched.cardHolder && formik.errors.cardHolder
                  }
                />
              </Box>
              <Box>
                <TextField
                  variant="standard"
                  name="amount"
                  type="number"
                  label="Amount"
                  min="0"
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                  error={formik.touched.amount && Boolean(formik.errors.amount)}
                  helperText={formik.touched.amount && formik.errors.amount}
                />
              </Box>
              <Box>
                <TextField
                  id="standard-select-currency-native"
                  select
                  value={currency}
                  onChange={(e) => setCurrency(e.currentTarget.value)}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Select your currency"
                  variant="standard"
                  sx={{ mr: "10px" }}
                >
                  {currencies.map((option) => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Box>
            </Box>
            <Box sx={{ mt: "15px" }}>
              <Button
                variant="contained"
                size="small"
                type="submit"
                onClick={() => handleClose()}
                sx={{ mr: " 10px" }}
              >
                <Typography>Cancel</Typography>
              </Button>
              <Button variant="contained" type="submit" size="small">
                <Typography>Accept</Typography>
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};
