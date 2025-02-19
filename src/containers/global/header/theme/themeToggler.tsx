import { memo } from "react";
import { SelectChangeEvent, useColorScheme } from "@mui/material";
import BaseSelect from "@/components/select";
import { APPLICATION_THEMES_MODES } from "../../constants";

const ThemeToggler = () => {
  // Get the current mode and the function to set the mode
  const { mode, setMode } = useColorScheme();

  // If there is no mode, return null
  if (!mode) {
    return null;
  }

  const handleChange = (event: SelectChangeEvent<any>) => {
    const newTheme = event.target.value as "light" | "dark";
    setMode(newTheme);
  };

  return (
    <BaseSelect
      onChange={handleChange}
      initialvalue={mode}
      items={APPLICATION_THEMES_MODES.map((language) => {
        return {
          label: language.toUpperCase(),
          value: language,
        };
      })}
    />
  );
};

export default memo(ThemeToggler);
