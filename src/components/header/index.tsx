import React from 'react';

import logo from '../../images/euro-logo.svg';

import './header.scss';

type IProps = {
    className?: string;
};

const Header = ({ className }: IProps) => {
    return (
        <div className="c-header__container">
            <div className={`c-header ${className}`}>
                <div className="c-header__title">
                    <img className="c-header__title-img" src={logo} />
                    <span className="c-header__title-text">Euro 2020 Sweepstakes</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
