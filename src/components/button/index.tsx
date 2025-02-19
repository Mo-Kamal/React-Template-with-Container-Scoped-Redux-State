import { FC } from "react";
import { BaseButtonStyled } from "./styles";
import { ButtonProps } from "@mui/material";
import GitHubIcon from "@/assets/github.svg";

export interface BaseButtonProps extends ButtonProps {
  disabled?: boolean;
}

export const CBaseButton: FC<BaseButtonProps> = ({
  disabled = false,
  children,
  ...props
}) => {
  return (
    <BaseButtonStyled
      disabled={disabled}
      variant="outlined"
      size="large"
      endIcon={<ButtonIcon />}
      {...props}
    >
      {children}
    </BaseButtonStyled>
  );
};

const ButtonIcon = () => <img src={GitHubIcon} alt="Github Icon" />;
