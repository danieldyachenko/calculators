import React from "react";
import {FullScreenBox, ModuleBox, ModulesContainer} from "./AppStyles";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {CommonFactor} from "./components/CommonFactor/CommonFactor";
import {AreaTriangle} from "./components/AreaTriangle/AreaTriangle";

export const App = () => {
    return (
        <FullScreenBox>
            <ModulesContainer>
                <Router>
                    <Switch>
                        <Route path="/area-triangle">
                            <AreaTriangle/>
                        </Route>
                        <Route path="/common-factor">
                            <CommonFactor/>
                        </Route>
                        <Route exact path="/">
                            <Link to="/area-triangle">
                                <ModuleBox>Module1</ModuleBox>
                            </Link>
                            <Link to="/common-factor">
                                <ModuleBox>Module2</ModuleBox>
                            </Link>
                        </Route>
                    </Switch>
                </Router>
            </ModulesContainer>
        </FullScreenBox>
    )
}