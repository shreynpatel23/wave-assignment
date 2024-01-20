import React from 'react';
import { IInputProps } from './interface';

export default function Input({
    labelName,
    hasError,
    errorMessage,
    id,
    ...props
}: IInputProps) {
    return <div className='flex flex-col'>
        <label htmlFor={id} className='text-xs leading-xs text-[#999]'>{labelName}</label>
        <input id={id} {...props} className={`py-2 px-4 mt-1.5 bg-white rounded-lg border ${hasError ? 'border-[#ff0000]' : 'border-[#eee]'}`} />
        {hasError && <p className='mt-2 text-xs leading-xs text-[#ff0000]'>{errorMessage}</p> }
    </div>
}
