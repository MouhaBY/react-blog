import React, { useState } from 'react';
import Comments from './comments';

export default function PostItem() {
    const [showComments, setShowComments] = useState(false);

    return (
        <div>
            <h2>The All New Peugeot 407</h2>
            <p>Say Hello to the renewed sedane from Renault</p>
            <p>Posted By <span>Mouha By</span>On<span>11:24 27/05/2022</span></p>
            <button onClick={ () => setShowComments(!showComments) }>{!showComments ? "Show " : "Hide " }comments</button>
            {
                showComments &&
                    <Comments />
            }
            <hr />
        </div>
    )
}
