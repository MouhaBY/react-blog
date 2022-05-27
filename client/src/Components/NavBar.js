import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './logout-button';


export default function NavBar() {
  return (
    <div>
        <nav>
            <Link to="/">Blog</Link> |{" "}
            <Link to="/addpost">Add Post</Link> |{" "}
            <Link to="/profile">Profile</Link> |{" "}
            <LogoutButton />
        </nav>
    </div>
  )
}
