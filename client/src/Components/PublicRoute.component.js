import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isUserData } from '../Services/auth.service';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isUserData() && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;