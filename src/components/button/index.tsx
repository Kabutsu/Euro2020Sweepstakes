import React, { FC } from 'react';

type IProps = {
    type?: 'submit' | 'reset' | 'button';
    className?: string;
    onClick?: () => void;
};

const Button: FC<IProps> = ({ type = 'button', className, onClick, children }) => (
    <button type={type} id="button" onClick={onClick} className={`c-button ${className}`}>
        {children}
    </button>
);

export default Button;
