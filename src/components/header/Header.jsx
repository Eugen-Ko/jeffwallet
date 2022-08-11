import { Box, Typography } from "@mui/material";
import styles from "components/styles";

export const Header = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "600px", md: "900px", lg: "1200px" },
        height: "50px",
        backgroundColor: "#1976d2",
        ...styles.flexAround,
        justifyContent: "space-between",
        padding: "0 15px",
        boxShadow: "0px -5px 5px -5px rgba(1, 9, 15, 0.6) inset",
      }}
    >
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Typography color="#fff" fontWeight="bold">
          Welcome (Registered User)
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" }, ...styles.flexAround }}>
        <Box sx={{ ...styles.flexAround }}>
          <Box
            sx={{
              width: "30px",
              height: "30px",
              borderRadius: "15px",
              backgroundColor: "#fff",
              ...styles.flexAround,
              marginRight: "10px",
              display: { xs: "flex", md: "none" },
            }}
          >
            ?
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Typography color="#fff" fontWeight="bold">
              (Registered User)
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        {" "}
        <Typography color="#fff" fontWeight="bold">
          Logout
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        {" "}
        <Typography color="#fff" fontWeight="bold">
          Burger
        </Typography>
      </Box>
    </Box>
  );
};
