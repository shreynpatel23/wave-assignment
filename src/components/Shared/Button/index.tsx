import React from 'react';
import { IButtonProps } from './interface';

export default function Button({
    buttonText,
    ...props
} : IButtonProps) {
    return <button {...props}>
        {buttonText}
    </button>
}