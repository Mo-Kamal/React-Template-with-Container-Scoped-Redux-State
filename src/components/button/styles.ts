import { Button, styled } from "@mui/material";
import { BaseButtonProps } from ".";

export const BaseButtonStyled = styled(Button)<BaseButtonProps>(
  ({ theme }) => ({
    textTransform: "capitalize",
    whiteSpace: "nowrap",
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    padding: theme.spacing(1.5, 3),

    //  hover effect
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      borderColor: theme.palette.primary.dark,
    },

    // Disabled styles
    "&.Mui-disabled": {
      color: theme.palette.action.disabled,
      borderColor: theme.palette.action.disabledBackground,
    },

    // Targeting the endIcon to invert its color in dark mode.
    "& .MuiButton-endIcon": {
      filter: theme.palette.mode === "dark" ? "invert(1)" : "none",
    },
  })
);
