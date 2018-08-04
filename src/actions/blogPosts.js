// ACTIONS --> javaScript objects / information that sends data from application to redux store

import database from "../firebase/firebase";

////////////////////////////////// ADD BLOG-POST STARTS //////////////////////////////////

export const addBlogPost = (blogPost) => ({
    type: "ADD_BLOG_POST",
    blogPost
});

// ------------------------------> START ADD BLOG-POST STARTS

// ------------------------------> START ADD BLOG-POST ENDS

////////////////////////////////// ADD BLOG-POST ENDS //////////////////////////////////



////////////////////////////////// REMOVE BLOG-POST STARTS //////////////////////////////////

export const removeBlogPost = ({id} = {}) => ({
    type: "REMOVE_BLOG_POST",
    id
});

// ------------------------------> START REMOVE BLOG-POST STARTS

// ------------------------------> START REMOVE BLOG-POST ENDS

////////////////////////////////// REMOVE BLOG-POST ENDS //////////////////////////////////



////////////////////////////////// EDIT BLOG-POST STARTS //////////////////////////////////

export const editBlogPost = (id, updates) => ({
    type: "EDIT_BLOG_POST",
    id,
    updates
});

// ------------------------------> EDIT ADD BLOG-POST STARTS

// ------------------------------> EDIT ADD BLOG-POST ENDS

////////////////////////////////// EDIT BLOG-POST ENDS //////////////////////////////////




////////////////////////////////// SET BLOG-POST STARTS //////////////////////////////////

export const setBlogPosts = (blogPosts) => ({
    type: "SET_BLOG_POSTS",
    blogPosts
});
// Changes redux store

// ------------------------------> SET ADD BLOG-POST STARTS

// ------------------------------> SET ADD BLOG-POST ENDS

////////////////////////////////// SET BLOG-POST ENDS //////////////////////////////////