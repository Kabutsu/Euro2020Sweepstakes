import React, { FC } from 'react';
import { Router, useHistory } from 'react-router-dom';
import history from './services/history';

import getRoutes, { TRoute } from './services/routes';

type TChildProps = {
    routes: Array<TRoute>;
}

interface IProps {
    children: ({ routes }: TChildProps) => React.ReactNode;
}

const RouteProvider: FC<IProps> = ({ children }) => {
    const routes = getRoutes();

    return (
        <Router history={history}>
            {children({ routes })}
        </Router>
    );
};

export default RouteProvider;
