import React, { useState } from 'react';
import Comments from './comments';


export default function PostItem(props) {
    const [showComments, setShowComments] = useState(false);

    return (
        <div>
            <h2>{props.post.title}</h2>
            <p>{props.post.description}</p>
            <p>Posted By <a href={"author/"+props.post.author}>{ props.post.author}</a> on<span> {props.post.creationDate} </span></p>
            <button onClick={ () => setShowComments(!showComments) }>{!showComments ? "Show " : "Hide " }comments</button>
            {
                showComments &&
                    <Comments postid={props.post.id}/>
            }
            <hr />
        </div>
    )
}
