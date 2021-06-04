import React, { FC } from 'react';
import Header from '../header';

type IProps = {};

const Layout: FC<IProps> = ({ children }) => (
    <div className="c-layout">
        <Header className="c-layout__header" />
        <div className="c-layout__page">
            {children}
        </div>
    </div>
);

export default Layout;
