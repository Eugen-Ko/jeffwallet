import { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { currencies } from "assets/currencies";
import { modalStyle } from "components/styles/styles";

export const ModalAddAmount = ({
  modalAction,
  modalAddAmount,
  setModalAddAmount,
}) => {
  const [currency, setCurrency] = useState("UAH");
  const [amount, setAmount] = useState(0);

  const handleClose = () => {
    setModalAddAmount(false);
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Modal
      open={modalAddAmount}
      // onClose={handleClose}
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
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            helperText="Select your currency"
            variant="standard"
            sx={{ mr: "10px" }}
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>

          <TextField
            placeholder="0"
            // onChange={handleChange}
            helperText="InputAmount"
            variant="standard"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
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
          <Button onClick={handleClose} variant="contained" size="small">
            Accept
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

// <div>
//   {/* <Dialog
//     open={modalAddAmount}
//     TransitionComponent={Transition}
//     keepMounted
//     onClose={handleClose}
//     aria-describedby="alert-dialog-slide-description"
//   > */}
//   <DialogTitle>{`Enter the amount to ${modalAction} money`}</DialogTitle>
//   {/* <DialogContent> */}
// <TextField
//   id="standard-select-currency-native"
//   select
//   label="Native select"
//   value={currency}
//   onChange={handleChange}
//   SelectProps={{
//     native: true,
//   }}
//   helperText="Please select your currency"
//   variant="standard"
// >
//   {currencies.map((option) => (
//     <option key={option.value} value={option.value}>
//       {option.label}
//     </option>
//   ))}
// </TextField>
//   {/* textfield */}
//   {/* </DialogContent> */}
//   {/* <DialogActions>
//       <Button onClick={handleClose}>Disagree</Button>
//       <Button onClick={handleClose}>Agree</Button>
//     </DialogActions> */}
//   {/* </Dialog> */}
// </div>;
