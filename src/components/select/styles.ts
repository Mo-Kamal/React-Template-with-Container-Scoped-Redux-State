import { InputLabel, MenuItem, Select, styled } from "@mui/material";

export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const StyledDropDown = styled(Select)(({ theme }) => ({
  height: 48,
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.grey[200],
  color: theme.palette.text.primary,
  textAlign: "left",
  // Default outline removed
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  // Pass theme values to the dropdown's menu (optional)
  "& .MuiMenu-paper": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.grey[800]
        : theme.palette.background,
  },
}));

export const Item = styled(MenuItem)(({ theme }) => ({
  fontSize: 16,
  lineHeight: "24px",
}));

export const Label = styled(InputLabel)(
  ({ theme, error }: { theme?: any; error?: boolean }) => ({
    color: error ? theme.palette.error.main : theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
  })
);
