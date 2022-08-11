import { Box } from "@mui/material";
import styles from "components/styles";

export const Wallet = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "600px", md: "900px", lg: "1200px" },
        ...styles.flexAround,
        backgroundColor: "violet",
      }}
    >
      wallet
      <Box>Card1</Box>
      <Box>Card2</Box>
      <Box>Card3</Box>
    </Box>
  );
};
