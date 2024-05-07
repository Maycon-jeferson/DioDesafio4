import styled from 'styled-components';
import { ButtonProps } from "./types";


export const ButtonContainer = styled.button<ButtonProps>`
    width: 100%;
    height: 42px;
    background: ${(props) => props.isValid ? "#BF4F74" : "white"};
    color: ${props => props.isValid ? "white" : "#000"};

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover{
        cursor: pointer;
        background-color: #81259D;
    }

`