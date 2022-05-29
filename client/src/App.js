import React, { useEffect } from "react";
import Routes from "./routes";
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './Components/Loading';
import Welcome from "./Blog/welcome";
import NavBar from "./Components/NavBar";
import * as ACTIONS from "../src/store/actions/actions";
import axios from "axios";
import { useDispatch } from "react-redux";


function App() {
    const { isLoading } = useAuth0();
    const { isAuthenticated } = useAuth0();
    const { user } = useAuth0();
    const dispatch = useDispatch();


    const send_profile_to_db = async () => {
        const data = user
        axios.post('/api/post/userprofiletodb', data)
            .then(()=> axios.get('/api/get/userprofilefromdb', {params: { email: data.email }})
                .then(res => {
                    dispatch(ACTIONS.set_db_profile(res.data[0]))
                })
            )
    }

    useEffect(()=>{
        if(isAuthenticated){
            send_profile_to_db()
        }
    },[isAuthenticated])

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
