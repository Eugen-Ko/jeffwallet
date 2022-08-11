import { Box } from "@mui/material";
import { Header } from "components/header";
import { Wallet } from "components/wallet/Wallet";
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
          backgroundColor: "blue",

          position: "fixed",
        }}
      >
        <Header />
      </Box>
      <Box sx={{ height: `${headerHeight}px` }} />
      <Box
        sx={{
          ...styles.flexAround,
          height: `calc(100vh - ${headerHeight}px)`,
          backgroundColor: "red",
        }}
      >
        <Wallet />
      </Box>
    </Box>
  );
}
