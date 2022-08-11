import { Box } from "@mui/material";
import { Header } from "components/header";
import { Wallet } from "components/wallet";
import styles from "components/styles";

export function Layout() {
  const headerHeight = 50;

  return (
    <Box>
      <Box
        sx={{
          ...styles.flexAround,
          width: "100%",
          height: `${headerHeight}px`,
          backgroundColor: "#1976d2",
          boxShadow: "0px -5px 5px -5px rgba(1, 9, 15, 0.6) inset",
          position: "fixed",
        }}
      >
        <Header />
      </Box>
      <Box sx={{ height: `${headerHeight}px` }} />
      <Box
        sx={{
          marginTop: "20px",
          ...styles.flexAround,
          alignItems: "start",
          height: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        <Wallet />
      </Box>
    </Box>
  );
}
