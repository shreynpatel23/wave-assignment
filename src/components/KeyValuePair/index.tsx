import  React from 'react';

interface KevValueProps {
    label: string;
    value?: string;
    children?: React.ReactElement;
}
 
export default function KevValue({children,label,value}: KevValueProps) {
    return <div className='pb-4'>
        <p className="text-xs text-[#999]">{label}</p>
        {children ?? <p className='text-md font-medium text-[#333]'>{value}</p> }
    </div>;
}
