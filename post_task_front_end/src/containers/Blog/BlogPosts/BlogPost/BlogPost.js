import React, { Component } from 'react'
import Post from '../../../../components/Post/post'
import Classes from './BlogPost.module.css'
import Tags from '../../../../components/Tags/tags'
import Button from '../../../../components/UI/Button/Button'
import Modal from '../../../../components/UI/Modal/modal'
import UpdatePost from '../../../Posts/UpdatePost/UpdatePost'
import * as actionCreator from '../../../../store/actions/index'
import { connect } from 'react-redux'
import CreateComment from '../../../Comments/CreateComment/CreateComment'
import Comments from '../../../../components/Comments/comments'

class BlogPost extends Component {
    state = {
        showCreateCommentModal: false,
        showUpdatePostModal: false,
    }

    updatePostHandler = () => {
        this.setState({ showUpdatePostModal: true })
    }

    createCommentHandler = () => {
        this.setState({ showCreateCommentModal: true })
    }

    modalClosedHandler = () => {
        this.setState({
            showUpdatePostModal: false,
            showCreateCommentModal: false,
        })
    }

    deletePostHandler = (postId) => {
        this.props.onPostDelete(postId);
    }

    modalContent(){
        let content = ''
        let showModal = this.props.tags && this.props.post; 
        if(showModal && this.state.showUpdatePostModal){
            content = <UpdatePost tags={this.props.tags} post={this.props.post}></UpdatePost>
        }

        if(showModal && this.state.showCreateCommentModal){
            content = <CreateComment post={this.props.post}></CreateComment>
        }

        return content; 
    }

    cssClasses(){
        return +this.props.user.id === +this.props.post.author.id ?
                Classes.CRUD: Classes.CURD_hidden
    }

    comments(){
        return this.props.post.comments.length > 0?
           <Comments comments={this.props.post.comments}/> : '';
    }
    render() {
        return (
            <div className={Classes.BlogPost}>
                <Post post={this.props.post}></Post>
                <Tags tags={this.props.post.tags} />
                <div className={this.cssClasses()}>
                    <Button buttonType="Success" clicked={() => this.updatePostHandler(this.props.post.id)}>update post</Button>
                    <Button buttonType="Danger" clicked={() => this.deletePostHandler(this.props.post.id)}>delete post</Button>
                </div>
                <div>
                <Button buttonType="Success" clicked={this.createCommentHandler}>add comment</Button>
                </div>
                <Modal show={this.state.showUpdatePostModal} modalClosed={this.modalClosedHandler}>
                    {this.modalContent()}
                </Modal>

                <Modal show={this.state.showCreateCommentModal} modalClosed={this.modalClosedHandler}>
                    {this.modalContent()}
                </Modal>

                {this.comments()}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        user: state.signIn.user,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onPostDelete: (postId) => dispatch(actionCreator.deletePostInit(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);