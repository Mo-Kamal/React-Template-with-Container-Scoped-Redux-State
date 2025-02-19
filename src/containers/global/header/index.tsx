import { LanguageSwitcher } from "./language";
import ThemeToggler from "./theme/themeToggler";
import { LanguageAndTheme, LinkAndLogo, Wrapper } from "./styles";

export const Header = () => {
  return (
    <Wrapper>
      <LinkAndLogo>
        <ThemeToggler />
      </LinkAndLogo>
      <LanguageAndTheme>
        <LanguageSwitcher />
      </LanguageAndTheme>
    </Wrapper>
  );
};
