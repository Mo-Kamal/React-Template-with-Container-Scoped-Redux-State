import { styled } from "@mui/material";
import { Theme } from "@mui/material/styles";

export const Wrapper = styled("div")(({ theme }: { theme: Theme }) => ({
  width: "100%",
  padding: theme.spacing(15, 4),
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Title = styled("h1")(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h3,
  color: theme.palette.text.primary,
  margin: 0,
  textAlign: "center",
}));

export const Feature = styled("div")(({ theme }: { theme: Theme }) => ({
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  border: `1px solid ${theme.palette.divider}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
}));

export const FeatureTitle = styled("h3")(({ theme }: { theme: Theme }) => ({
  margin: 0,
  ...theme.typography.h6,
  color: theme.palette.text.primary,
}));

export const FeatureDescription = styled("p")(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
  })
);

export const FeaturesContainer = styled("div")(
  ({ theme }: { theme: Theme }) => ({
    marginTop: theme.spacing(3),
    display: "grid",
    justifyContent: "center",
    gap: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "64rem",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    },
  })
);
