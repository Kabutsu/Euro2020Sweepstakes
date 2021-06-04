import React from 'react';

type IProps = {};

const Button = ({}: IProps) => (
    <button type="button" id="button" onClick={() => alert('click!')}>
        Click me
    </button>
);

export default Button;
