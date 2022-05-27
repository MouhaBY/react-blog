import React from 'react';
import LogoutButton from '../Components/logout-button';


export default function Posts(props) {
    
  return (
    <div>
        <h1>Blog</h1>
        {
            <LogoutButton />
        }
    </div>
  )
}
