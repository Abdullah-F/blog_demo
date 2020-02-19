import React, { Component } from 'react'
import Classes from './Blog.module.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/index'
import BlogPosts from './BlogPosts/BlogPosts'
import Spinner from '../../components/UI/Spinner/Spinner'
import Modal from '../../components/UI/Modal/modal'
import CreatePost from '../Posts/CreatePost/CreatePost'
import Button from '../../components/UI/Button/Button'
class Blog extends Component {

    state ={
        show: false,
    }
    componentDidMount() {
        this.props.onFetchPosts()
        this.props.onFetchTags()
    }

    blogPosts() {
        return this.props.posts ? <BlogPosts {...this.props} /> : <Spinner />
    }

    modalClosedHandler =()=>{
        this.setState({show: false})
    }

    createPostHandler = ()=>{
        this.setState({show: true})
    }

    modalContent(){
        let content = ''
        if(this.props.tags){
            content = <CreatePost tags={this.props.tags}></CreatePost>
        }
        return content; 
    }

    render() {
        return (
            <div className={Classes.Blog}>
                <Button buttonType="Success" clicked = {this.createPostHandler}>Click Here To Create New Post</Button>
                {this.blogPosts()}
                <Modal show={this.state.show} modalClosed={this.modalClosedHandler}>
                   {this.modalContent()}
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.blog.posts,
        tags: state.blog.tags,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchPosts: () => dispatch(actionCreators.postsInit()),
        onFetchTags: () => dispatch(actionCreators.tagsInit())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Blog);