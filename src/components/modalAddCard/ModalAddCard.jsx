import { Modal, Box, Typography, Button } from "@mui/material";
import { modalStyle } from "components/styles/styles";

export const ModalAddCard = ({ modalAddCard, setModalAddCard }) => {
  const handleClose = () => {
    setModalAddCard(false);
  };

  return (
    <Modal open={modalAddCard} onClose={handleClose} aria-labelledby="Add card">
      <Box sx={modalStyle}>
        <Typography sx={{ fontWeight: "bold" }}>{`Add card`}</Typography>
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
