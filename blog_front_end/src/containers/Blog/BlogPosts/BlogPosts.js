import React, { Component } from 'react'
import Aux from '../../../hoc/Aux/Aux'
import BlogPost from './BlogPost/BlogPost'
class BlogPosts extends Component {
    render() {
        return (
            <Aux>
                {
                    this.props.posts.sort((a, b) => a.id > b.id? 1: -1 ).map(post => {
                        return <BlogPost key={post.id} post={post} tags={this.props.tags}/>
                    })
                }
            </Aux>
        )
    }
}

export default BlogPosts;