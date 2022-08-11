import { Box, Button } from "@mui/material";

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
        <Box sx={{ marginBottom: "15px" }}>
          Amount of cards
          <p>usd</p>
          <p>euro</p>
          <p>uah</p>
        </Box>
        <Box sx={{ marginBottom: "15px" }}>
          Amount of cash
          <Button variant="contained" size="small" sx={{ mr: "5px" }}>
            deposit
          </Button>
          <Button variant="contained" size="small">
            withdraw
          </Button>
          <p>usd</p>
          <p>euro</p>
          <p>uah</p>
        </Box>
      </Box>
      <Box>
        Cards
        <Button variant="contained" size="small">
          Add card
        </Button>
        <Box>
          <Box
            sx={{
              width: "256px",
              height: "164px",
              border: "1px solid tomato",
              borderRadius: "10px",
              mt: "10px",
              mb: "5px",
            }}
          ></Box>
          <Button variant="contained" size="small" sx={{ mr: "5px" }}>
            deposit
          </Button>
          <Button variant="contained" size="small" sx={{ mr: "5px" }}>
            withdraw
          </Button>
          <Button variant="contained" color="error" size="small">
            delete
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
