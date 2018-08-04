import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";

const BlogPostListItem = ({id, recipeName, ingredients, procedure, createdAt}) => {

    <Link to={`/edit/${id}`}>
        <div>
            <h3>{recipeName}</h3>

            <span>{moment(createdAt).format("M / D / YYYY")}</span>
        </div>
    </Link>
};

export default BlogPostListItem;