import React, { FC } from 'react';

import './button.scss';

type IProps = {
    type?: 'submit' | 'reset' | 'button';
    className?: string;
    onClick?: () => void;
};

const Button: FC<IProps> = ({ type = 'button', className, onClick, children }) => (
    <button type={type} id="button" onClick={onClick} className={`${className} c-button`}>
        {children}
    </button>
);

export default Button;
