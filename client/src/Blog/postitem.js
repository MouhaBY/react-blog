import React, { useState } from 'react';
import Comments from './comments';


export default function PostItem(props) {
    const [showComments, setShowComments] = useState(false);

    return (
        <div>
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
            <p>Posted By <a href={"author/"+props.post.user_id}>{ props.post.user_id}</a> on<span> {props.post.date_created} </span></p>
            <button onClick={ () => setShowComments(!showComments) }>{!showComments ? "Show " : "Hide " }comments</button>
            {
                showComments &&
                    <Comments postid={props.post.pid}/>
            }
            <hr />
        </div>
    )
}
