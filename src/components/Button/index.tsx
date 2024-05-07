import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isValid, disabled,}: IButtonProps) => {
  return <ButtonContainer as="button" onClick={onClick} disabled={disabled}>{title}</ButtonContainer>

};

//disabled foi passado como parametro para que o react possa entemder essa opeacao
//as="button" foi adicionado para crrigir um bug do styled-components

export default Button;
