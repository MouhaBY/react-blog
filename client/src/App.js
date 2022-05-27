import React from "react";
import Routes from "./routes";
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './Components/Loading';


function App() {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Routes />
    );
}

export default App;
