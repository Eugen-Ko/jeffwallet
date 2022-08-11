import { Button } from "@mui/material";
import { CardFace } from "components/cardFace";

export const CardItem = () => {
  return (
    <>
      <CardFace />
      <Button variant="contained" size="small" sx={{ mr: "5px" }}>
        deposit
      </Button>
      <Button variant="contained" size="small" sx={{ mr: "5px" }}>
        withdraw
      </Button>
      <Button variant="contained" color="error" size="small">
        delete
      </Button>
    </>
  );
};
