import React from "react";
import { useTranslation } from "react-i18next";
import { SelectChangeEvent } from "@mui/material";
import BaseSelect from "@/components/select";
import { LANGUAGES } from "@/containers/global/constants";

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent<any>) => {
    const lng = event.target.value as string;
    i18n.changeLanguage(lng);
  };

  return (
    <BaseSelect
      onChange={handleChange}
      initialvalue={i18n.language}
      items={LANGUAGES.map((language) => ({
        label: language.toUpperCase(),
        value: language,
      }))}
    />
  );
};
