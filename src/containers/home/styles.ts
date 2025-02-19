import { styled } from "@mui/material";
import { Theme } from "@mui/material/styles";

export const Wrapper = styled("div")(({ theme }: { theme: Theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4, 0),
}));
