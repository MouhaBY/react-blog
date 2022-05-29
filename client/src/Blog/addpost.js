import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AddPost() {
    const [blogTitle, setBlogTitle] = useState("");
    const [blogBody, setBlogBody] = useState("");
    const navigate = useNavigate();
    const authorId = useSelector((state)=> { return state.auth_reducer.db_profile.uid });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const data = { blogTitle, blogBody, author:authorId }
        axios.post('/api/post/blog', data)
            .then(()=>{ navigate('/') })
    }

    return (
        <div>
            <h1>addpost</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Title</label>
                    <input type="text" value={blogTitle} onChange={(e)=>setBlogTitle(e.target.value)} />
                </div>
                <div>
                    <label >Body</label>
                    <input type="text" value={blogBody} onChange={(e)=>setBlogBody(e.target.value)} />        
                </div>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}
