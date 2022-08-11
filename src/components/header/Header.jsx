import { Box } from "@mui/material";
import styles from "components/styles";

export const Header = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "600px", md: "900px", lg: "1200px" },
        height: "50px",
        backgroundColor: "green",
        ...styles.flexAround,
        justifyContent: "space-between",
        padding: "0 15px",
      }}
    >
      <Box>Welcome (Registered User)</Box>
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>Logout</Box>
      <Box sx={{ display: { xs: "flex", sm: "none" } }}>Burger</Box>
    </Box>
  );
};
