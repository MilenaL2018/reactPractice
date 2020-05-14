import React from "react";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

import Tabata from "./Tabata";
import Music from "./Music";
import Library from "./Library";

const Main = () => (
            <div>
                <Switch>
                    <Route path="/" component={Tabata} />
                    <Route path="/music" component={Music} />
                    <Route path="/library" component={Library} />
                </Switch>
            </div>
);

export default Main;


