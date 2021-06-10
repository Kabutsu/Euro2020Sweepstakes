import React from 'react';

import './tooltip.scss';

type IProps = {
    label: string;
};

const Tooltip = ({ label }: IProps) => (
    <div className="c-tooltip">
        <span className="c-tooltip__mark">?</span>
        <div className="c-tooltip__label">
            {label}
        </div>
    </div>
);

export default Tooltip;
