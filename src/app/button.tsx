// DatBoiSUS-Baka
// 05-Jul-2025
// app/button.tsx

'use client'
import React from 'react';

const Button = ({ children, link } : {children:string, link:string}) =>
{
    return (
        <button
        className='p-2 hover: bg-blue-500 hover:bg-blue-700 font-bold m-3 rounded'>
            <a href={link}>
                {children}
            </a>
        </button>
    )
};

export default Button;