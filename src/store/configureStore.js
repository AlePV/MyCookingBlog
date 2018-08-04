import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import blogPostsReducer from "../reducers/blogPosts";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            blogPosts: blogPostsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};