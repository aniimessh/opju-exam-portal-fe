import { styled } from "@mui/system";

const { Container, Box } = require("@mui/material");

export const OpWrapper = styled(Container)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const OpLoginBox = styled(Box)({
  maxWidth: "500px",
  width: "95%",
});
