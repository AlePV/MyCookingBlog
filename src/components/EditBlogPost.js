import React from "react";
import {connect} from "react-redux";
import BlogPostForm from "./BlogPostForm";
import {startEditBlogPost, startRemoveBlogPost} from "../actions/blogPosts";

export class EditBlogPost extends React.Component {
    
    onSubmit = (blogPost) => {
        this.props.startEditBlogPost(this.props.blogPost.id, blogPost);
        this.props.history.push("/");
    };

    onRemove = () => {
        this.props.startRemoveBlogPost({id: this.props.blogPost.id});
        this.props.history.push("/");
    };
    
    render() {
        return (
            <div>
                <h1>Edit Blog Post</h1>

                <BlogPostForm 
                    blogPost = {this.props.blogPost}
                    onSubmit = {this.onSubmit}
                />

                <button onClick={this.onRemove}>
                    Remove Blog Post
                </button>
            </div>
        )
    }
};

const mapStateToProps = (state, props) => {
    return {
        blogPost: state.blogPost.find((blogPost) => blogPost.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditBlogPost: (blogPost, id) => dispatch(startEditBlogPost(blogPost, id)),
        startRemoveBlogPost: (data) => dispatch(startRemoveBlogPost(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBlogPost);