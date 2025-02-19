import { styled } from "@mui/material/styles";

export const Wrapper = styled("header")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100px",
  [theme.breakpoints.down("sm")]: {
    padding: "0 10px",
  },
}));

export const LanguageAndTheme = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const LinkAndLogo = styled("div")({
  display: "flex",
  alignItems: "center",
});
