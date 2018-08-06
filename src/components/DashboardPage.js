import React from "react";
import BlogPostList from "./BlogPostList";
import {Link} from "react-router-dom";

const DashboardPage = () => (
    <div>

        <Link to="/addRecipeBlogPost">Add Recipe Blog Post</Link>

        <BlogPostList />
    </div>
);

export default DashboardPage;