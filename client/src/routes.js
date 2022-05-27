import React from 'react';
import { Routes, Route } from "react-router-dom";
import EditPost from './Blog/editpost';
import Posts from './Blog/posts';
import ShowPost from './Blog/showpost';
import AddPost from './Blog/addpost';
import NotFound from './Components/NotFound';
import Welcome from './Blog/welcome';
import Profile from './Components/Profile';
import ProtectedRoute from './auth/protected-route';



export default function routes() {
    

    return (
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route exact path="/" element={<Posts />} />
                    <Route exact path="/welcome" element={<Welcome />} />
                    <Route path="/addpost" element={<AddPost />} />
                    <Route path="/editpost/:pid" element={<EditPost />} />
                    <Route path="/post/:pid" element={<ShowPost />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
    )
}
