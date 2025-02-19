import { CBaseButton } from "@/components/button";
import { useTranslation } from "react-i18next";
import { Description, Title, Wrapper } from "./styles";
import { translations } from "@/locales/i18n";
import { GITHUB_LINK } from "../constants";
export const HeroComponent = () => {
  const { t } = useTranslation();

  const handleButtonOnClick = () => {
    window.open(GITHUB_LINK, "_blank");
  };

  return (
    <Wrapper>
      <Title>{t(translations.React_Template())}</Title>
      <Description>{t(translations.React_Template_Description())}</Description>
      <CBaseButton onClick={handleButtonOnClick}>
        {t(translations.Use_Template())}
      </CBaseButton>
    </Wrapper>
  );
};
