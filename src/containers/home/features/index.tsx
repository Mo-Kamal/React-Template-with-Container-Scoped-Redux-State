import { useTranslation } from "react-i18next";
import { FEATURES_DATA } from "../constants"; // Import the constants
import {
  Feature,
  FeatureDescription,
  FeaturesContainer,
  FeatureTitle,
  Title,
  Wrapper,
} from "./styles";
import { translations } from "@/locales/i18n";

export const Features = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t(translations.Features())}</Title>
      <FeaturesContainer>
        {FEATURES_DATA.map((feature, index) => (
          <Feature key={index}>
            <FeatureTitle>{t(translations[feature.titleKey]())}</FeatureTitle>
            <FeatureDescription>
              {t(translations[feature.descriptionKey]())}
            </FeatureDescription>
          </Feature>
        ))}
      </FeaturesContainer>
    </Wrapper>
  );
};
