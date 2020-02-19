import React from 'react';
import Classes from './comment.module.css'

const comment = (props) => {
    return (
        <div className={Classes.Comment}>
            <h5 className={Classes.AuthoredBy}>AuthoredBy:  {props.comment.commenter.name}</h5>
            <p className={Classes.CommentBody}>{props.comment.body}</p>
        </div>
    );
}

export default comment;