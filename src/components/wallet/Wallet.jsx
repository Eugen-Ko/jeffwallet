import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { AmountCards } from "components/amountCards";
import { AmountCash } from "components/amountCash";
import { CardsList } from "components/cardsList";
import { ModalAddCard } from "components/modalAddCard";

export const Wallet = () => {
  const [modalAddCard, setModalAddCard] = useState(false);
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "600px", md: "900px", lg: "1200px" },
        padding: "15px",
        marginBottom: "15px",
      }}
    >
      <Typography sx={{ mb: "10px", mr: "10px" }}>Ballance</Typography>
      <Box sx={{ marginBottom: "15px" }}>
        <AmountCards />
        <AmountCash />
      </Box>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ mr: "124px" }}>Cards</Typography>
          <Button
            variant="contained"
            size="small"
            onClick={() => setModalAddCard(true)}
          >
            Add card
          </Button>
        </Box>
        {modalAddCard && (
          <ModalAddCard
            modalAddCard={modalAddCard}
            setModalAddCard={setModalAddCard}
          />
        )}
        <CardsList />
      </Box>
    </Box>
  );
};
