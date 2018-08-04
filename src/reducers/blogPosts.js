// REDUCER --> updates application's state according to actions

const blogPostsReducerDefaultState = [];

export default (state = blogPostsReducerDefaultState, action) => {
    switch(action.type) {

        case "ADD_BLOG_POST":
            return [
                ...state,
                action.blogPost
            ];

        case "REMOVE_BLOG_POST":
            return state.filter(({id}) => {
                return id !== action.id;
            });

        case "EDIT_BLOG_POST":
            return state.map((blogPost) => {
                if (blogPost.id === action.id) {
                    return {
                        ...blogPost,
                        ...action.updates
                    }
                } else {
                    return blogPost;
                }
            });

        case "SET_BLOG_POSTS":
            return action.blogPosts;

        default:
            return state;

    }
};