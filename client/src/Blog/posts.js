import React, { useEffect } from 'react';
import PostList from './postList';
import axios from "axios";
import * as ACTIONS from "../store/actions/actions";
import { useDispatch, useSelector } from 'react-redux';


export default function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector((state)=> { return state.posts_reducer.posts });

    useEffect(()=>{
        axios.get('/api/get/posts')
                .then(res => {
                    dispatch(ACTIONS.fetch_db_posts(res.data))
                })
    },[])

    return (
        <div>
            <h1>Blog</h1>
            <br />
            {
                posts ? 
                    <PostList posts={posts} />
                : null
            }
        </div>
    )
}
