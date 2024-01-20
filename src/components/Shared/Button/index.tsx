import React from 'react';

// * interface
import { IButtonProps } from './interface';

export default function Button({
    buttonText,
    ...props
} : IButtonProps) {
    return <button {...props}>
        {buttonText}
    </button>
}