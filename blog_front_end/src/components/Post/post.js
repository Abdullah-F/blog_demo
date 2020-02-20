import React from 'react'
import Classes from './post.module.css'
const post = (props) => {
    return (
        <div>
            <img src={props.post.author.avatar_url}/>
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
        </div>
    )
}


export default post;