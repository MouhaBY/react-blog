import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../Components/Loading';


function ProtectedRoute ({ children }) {
    return(
        withAuthenticationRequired(children, {
            onRedirecting: ()=> <Loading />,
        })      
    )
};

export default ProtectedRoute;
