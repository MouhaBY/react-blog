import React from 'react';
import PostList from './postList';


const POSTS = [
    {id:1, title:"Say Hi to the all new Peugeot 407", description:"The all new sedane from the french company", author:"mouhaBY", creationDate:"11:33 27/05/2022"},
    {id:2, title:"Welcome to the Volkswagen Golf MK8", description:"New compact from the deutch company", author:"mouhaBY", creationDate:"11:45 27/05/2022"}
];

export default function Posts() {   
    return (
        <div>
            <h1>Blog</h1>
            <br />
            <PostList posts={POSTS} />
        </div>
    )
}
