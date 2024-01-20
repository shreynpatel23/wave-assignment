import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends React.ComponentProps<"button"> {
    buttonText: string;
}