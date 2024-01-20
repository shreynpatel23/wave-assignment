import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelName: string;
    hasError?: boolean;
    errorMessage?: string;
}