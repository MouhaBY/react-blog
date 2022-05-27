import React from "react";
import Routes from "./routes";
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './Components/Loading';
import Welcome from "./Blog/welcome";
import NavBar from "./Components/NavBar";


function App() {
    const { isLoading } = useAuth0();
    const { isAuthenticated } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

    if (!isAuthenticated) {
        return <Welcome />;
    }

    return (
        <div>
            <NavBar />
            <Routes />        
        </div>
    );
}

export default App;
