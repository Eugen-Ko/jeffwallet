import { Box, Button } from "@mui/material";
import { AmountCards } from "components/amountCards";
import { AmountCash } from "components/amountCash";
import { CardsList } from "components/cardsList";

export const Wallet = () => {
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
        <Button variant="contained" size="small">
          Add card
        </Button>
        <CardsList />
      </Box>
    </Box>
  );
};
