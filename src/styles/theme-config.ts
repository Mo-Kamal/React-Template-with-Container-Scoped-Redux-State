import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    fontFamily: "Courier New, Courier, monospace",
  },
  colorSchemes: {
    dark: true,
  },
  // set light mode default background color to red
  palette: {
    background: {
      default: grey[200],
    },
  },
});
