import React from 'react';

// * assets
import logo from '../../assets/img/wave.svg';

export default function Header() {
    return <header className='p-4 bg-[#f2ffff] h-[10%] flex items-center'>
        <img src={logo} alt="logo of wave" className='w-28' />
    </header>
}
