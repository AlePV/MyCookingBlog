import React from "react";
import {connect} from "react-redux";
import BlogPostForm from "./BlogPostForm";
import {startAddBlogPost} from "../actions/blogPosts";

export class AddBlogPost extends React.Component {

    onSubmit = (blogPost) => {
        this.props.startAddBlogPost(blogPost);
        this.props.history.push("/");
    };

    render() {
        return (
            <div>
                <h1>Add Recipe Blog Post</h1>

                <BlogPostForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    startAddBlogPost: (blogPost) => dispatch(startAddBlogPost(blogPost))
});

export default connect(undefined, mapDispatchToProps)(AddBlogPost);