const flexAround = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "270px", sm: "400px" },
  height: "200px",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
  ...flexAround,
  flexDirection: "column",
};

const modalCardStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "270px" },
  height: "400px",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
  ...flexAround,
  flexDirection: "column",
};

export { flexAround, modalStyle, modalCardStyle };
