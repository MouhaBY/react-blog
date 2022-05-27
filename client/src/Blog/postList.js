import React from 'react';
import PostItem from "./postitem";


export default function PostList(props) {
    return (
        <div>
            {
                props.posts.map((post) =>
                    <PostItem key={post.id} post={post}/>
                )
            }
        </div>
    )
}
