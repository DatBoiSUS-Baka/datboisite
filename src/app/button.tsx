// DatBoiSUS-Baka
// 05-Jul-2025
// app/button.tsx

'use client'
import React from 'react';

const Button = ({ children, link } : {children:string, link:string}) =>
{
    return (
        <button
        className='p-2 font-bold m-2 rounded primary-button'>
            <a href={link}>
                {children}
            </a>
        </button>
    )
};

export default Button;