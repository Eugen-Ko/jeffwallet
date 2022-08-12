import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export const CardFace = ({ el }) => {
  const { cardNumber, expData, amount, currency, bankName, scheme, type } = el;
  const cardNumberStr =
    String(cardNumber).slice(0, 4) +
    " " +
    String(cardNumber).slice(4, 8) +
    " " +
    String(cardNumber).slice(8, 12) +
    " " +
    String(cardNumber).slice(12, 16);
  const cardNumberHide =
    String(cardNumber).slice(0, 4) +
    " **** **** " +
    String(cardNumber).slice(12, 16);
  const [hideNumber, setHideNumber] = useState(true);

  return (
    <Box
      sx={{
        width: "226px",
        height: "134px",
        border: "1px solid tomato",
        borderRadius: "10px",
        mt: "10px",
        mb: "5px",
        padding: "15px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: "5px" }}>
        <Typography sx={{ fontSize: "12px" }}>{bankName}</Typography>
        <Typography sx={{ fontSize: "12px" }}>{scheme}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "right" }}>
        <Typography sx={{ fontSize: "12px" }}>{type}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "left" }}>
        <Typography sx={{ mr: "10px" }}>{amount}</Typography>
        <Typography>{currency}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {hideNumber ? (
          <Typography
            sx={{ fontWeight: "bold" }}
            onClick={() => setHideNumber(false)}
          >
            {cardNumberHide}
          </Typography>
        ) : (
          <Typography
            sx={{ fontWeight: "bold" }}
            onClick={() => setHideNumber(true)}
          >
            {cardNumberStr}
          </Typography>
        )}
        {/* <Button size="small">copy</Button> */}
      </Box>
      <Box>
        <Typography sx={{ mr: "14px" }}>{expData}</Typography>
      </Box>
    </Box>
  );
};
