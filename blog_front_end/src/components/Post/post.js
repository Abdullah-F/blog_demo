import React from 'react'

const post = (props) => {
    return (
        <div>
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
        </div>
    )
}


export default post;