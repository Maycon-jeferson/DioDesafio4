export interface IButtonProps {
    title: string;
    onClick?: () => void;
    disabled?: boolean;
    isValid?: boolean;
    debug?: string
}

export  interface ButtonProps {
    isValid?: boolean;
}