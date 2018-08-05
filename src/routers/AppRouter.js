import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import DashboardPage from "../components/DashboardPage";
import PageNotFound from "../components/PageNotFound";
import LoginPage from "../components/LoginPage";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AddBlogPost from "../components/AddBlogPost";
import EditBlogPost from "../components/EditBlogPost";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history} > 
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage}/>
                <PrivateRoute path="/addRecipeBlogPost" component={AddBlogPost} />
                <PrivateRoute path="/edit/:id" component={EditBlogPost} />
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;

// Switch goes in order to check which Route the user is calling, and if it finds it, it stops