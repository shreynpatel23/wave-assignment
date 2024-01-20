import  React from 'react';
import { KevValueProps } from './interface';
 
export default function KevValue({children,label,value}: KevValueProps) {
    return <div className='pb-4'>
        <p className="text-xs leading-xs text-[#999]">{label}</p>
        {children ?? <p className='text-md font-medium text-[#333]'>{value}</p> }
    </div>;
}
