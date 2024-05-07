import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isValid, disabled,}: IButtonProps) => {
  return <ButtonContainer as="button" onClick={onClick} isValid={isValid} disabled={disabled}>{title}</ButtonContainer>

};

export default Button;
