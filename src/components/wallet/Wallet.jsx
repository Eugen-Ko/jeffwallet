import { useState } from "react";
import { Box, Button } from "@mui/material";
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
        backgroundColor: "violet",
        padding: "15px",
        marginBottom: "15px",
      }}
    >
      Ballance
      <Box sx={{ marginBottom: "15px" }}>
        <AmountCards />
        <AmountCash />
      </Box>
      <Box>
        Cards
        <Button
          variant="contained"
          size="small"
          onClick={() => setModalAddCard(true)}
        >
          Add card
        </Button>
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
