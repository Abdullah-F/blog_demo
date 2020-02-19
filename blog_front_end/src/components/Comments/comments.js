import React from 'react';
import Classes from './comments.module.css'
import Comment from './Comment/comment'
const comments = (props) => {
    const commentsList = props.comments.sort((a, b) => a.id > b.id? 1: -1 ).map((comment)=>{
        return <Comment comment={comment} key={comment.id}/>
    })
    return (
        <div className={Classes.Comments}>
            {commentsList.length > 0 ? <h4>Comments : </h4> : ''}
            {commentsList}
        </div>
    )
}

export default comments;