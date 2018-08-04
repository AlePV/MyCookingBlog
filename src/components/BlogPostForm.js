// Reusable component for AddBlogPost and EditBlogPost

import React from "react";
import moment from "moment";
import {SingleDatePicker} from "react-dates";

export default class BlogPostForm extends React.Component {

    constructor(props) {
        
        super(props);

        this.state = {
            recipeName: props.blogPost ? props.blogPost.recipeName : "",
            ingredients: props.blogPost ? props.blogPost.ingredients : "",
            procedure: props.blogPost ? props.blogPost.procedure : "",
            createdAt: props.blogPost ? moment(props.blogPost.createdAt) : moment(),
            calendarFocused: false,
            error: ""
        }
    }
    

    onRecipeNameChange = (e) => {
        const recipeName = e.target.value;
        this.setState(() => ({recipeName}));
    }; 

    onIngredientsChange = (e) => {
        const ingredients = e.target.value;
        this.setState(() => ({ingredients}));
    };

    onProcedureChange = (e) => {
        const procedure = e.target.value;
        this.setState(() => ({procedure}));
    };

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({createdAt}));
        }
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.recipeName || !this.state.procedure) {
            this.setState(() => ({error: "Please provide a recipe name and procedure"}))
        } else {
            this.setState(() => ({error: ""}));
            this.props.onSubmit({
                recipeName: this.state.recipeName,
                ingredients: this.state.ingredients,
                procedure: this.state.procedure,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>

                {this.state.error && <p>{this.state.error}</p>}

                <input 
                    type="text"
                    placeholder="Recipe Name"
                    autoFocus
                    value={this.state.recipeName}
                    onChange={this.onRecipeNameChange}
                />

                <input 
                    type="text"
                    placeholder="Ingredients"
                    value={this.state.ingredients}
                    onChange={this.onIngredientsChange}
                />

                <textarea
                    placeholder="Procedure"
                    value={this.state.procedure}
                    onChange={this.onProcedureChange}
                >
                </textarea>

                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />

                <button>Save recipe</button>

            </form>
        )
    }

};