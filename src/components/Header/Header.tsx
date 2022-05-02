import React, { FC } from 'react';
import './Header.css'

interface HeaderProps {
    title: string;
    subtitle?: string;
}

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <div>
            <header>
                <h1 className='header__title'>
                    {title} <span className='header__subtitle'>{subtitle}</span>
                </h1>
            </header>
        </div>
    );
}


export default Header;