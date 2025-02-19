import { styled } from "@mui/material";

export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.default,
}));

export const Title = styled("h1")(({ theme }) => ({
  fontSize: "4rem",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));

export const Description = styled("p")(({ theme }) => ({
  fontSize: "1.25rem",
  color: theme.palette.text.secondary,
  textAlign: "center",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));
