// ACTIONS --> javaScript objects / information that sends data from application to redux store

import database from "../firebase/firebase";

////////////////////////////////// ADD BLOG-POST STARTS //////////////////////////////////

export const addBlogPost = (blogPost) => ({
    type: "ADD_BLOG_POST",
    blogPost
});

// ------------------------------> START ADD BLOG-POST STARTS
export const startAddBlogPost = (blogPostData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            recipeName = "",
            ingredients = "",
            procedure = "",
            createdAt = 0
        } = blogPostData;
        const blogPost = {recipeName, ingredients, procedure, createdAt};

        return database.ref(`users/${uid}/blogPosts`).push(blogPost).then((ref) => {
            dispatch(addBlogPost({
                id: ref.key,
                ...blogPost
            }))
        });
    };
};
// ------------------------------> START ADD BLOG-POST ENDS

////////////////////////////////// ADD BLOG-POST ENDS //////////////////////////////////



////////////////////////////////// REMOVE BLOG-POST STARTS //////////////////////////////////

export const removeBlogPost = ({id} = {}) => ({
    type: "REMOVE_BLOG_POST",
    id
});

// ------------------------------> START REMOVE BLOG-POST STARTS
export const startRemoveBlogPost = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/blogPosts/${id}`).remove().then(() => {
            dispatch(removeBlogPost({id}));
        })
    };
};
// ------------------------------> START REMOVE BLOG-POST ENDS

////////////////////////////////// REMOVE BLOG-POST ENDS //////////////////////////////////



////////////////////////////////// EDIT BLOG-POST STARTS //////////////////////////////////

export const editBlogPost = (id, updates) => ({
    type: "EDIT_BLOG_POST",
    id,
    updates
});

// ------------------------------> START EDIT BLOG-POST STARTS
export const startEditBlogPost = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/blogPosts/${id}`).update(updates).then(() => {
            dispatch(editBlogPost(id, updates));
        });
    };
};
// ------------------------------> START EDIT BLOG-POST ENDS

////////////////////////////////// EDIT BLOG-POST ENDS //////////////////////////////////




////////////////////////////////// SET BLOG-POST STARTS //////////////////////////////////

export const setBlogPosts = (blogPosts) => ({
    type: "SET_BLOG_POSTS",
    blogPosts
});
// Changes redux store
// Gets "array" from firebase and sets it

// ------------------------------> START SET BLOG-POST STARTS
export const startSetBlogPosts = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/blogPosts`).once("value").then((snapshot) => {
            const blogPosts = [];

            snapshot.forEach((childSnapshot) => {
                blogPosts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setBlogPosts(blogPosts));
        });
    };
};
// Fetches all data once
// Parses data into an array
// Dispatches setBogPosts
// ------------------------------> START SET BLOG-POST ENDS

////////////////////////////////// SET BLOG-POST ENDS //////////////////////////////////