import React from "react";
import {connect} from "react-redux";
import BlogPostListItem from "./BlogPostListItem";

export const BlogPostList = (props) => (
    <div> 
        {
            props.blogPosts.length === 0 ? 
            (<div>
                <span>No blog posts</span>
            </div>)
             : 
            (
                props.blogPosts.map((blogPost) => {
                    return <BlogPostListItem key={blogPost.id} {...blogPost} />
                })
            ) 
        }
    </div> 
);

const mapStateToProps = (state) => {
    return {
    blogPosts: state.blogPosts
    }
};

export default connect(mapStateToProps)(BlogPostList);