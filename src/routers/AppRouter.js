import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import DashboardPage from "../components/DashboardPage";
import PageNotFound from "../components/PageNotFound";
import LoginPage from "../components/LoginPage";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history} > 
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;

//BrowserRouter only accepts one thing: if you want to add more add a wrapping <div></div>

// Switch goes in order to check which Route the user is calling, and if it finds it, it stops

//Client side server/routing: does not full refresh the complete page, does not go to the server

// HISTORY (NPM) --> allows me to create some history --> without the need of a component
// BROWSER ROUTER --> uses the browser router's history by default (has history built in)
// Change from browserRouter to Router --> because Router allows to provide our own history value
// '--> advantage --> can export it and use history variable in other files
// HISTORY={HISTORY}
//   '--> History value
//             '--> custom history I created above