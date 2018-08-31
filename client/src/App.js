import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Internships from "./Pages/Internships";
import RateMyProfessor from "./Pages/RateMyProfessor";
import Widgets from "./Pages/Widgets";

const App = () => {
    return (
        <Router>
        <div>
            <Route exact path="/home" Component={Home} />
            <Route exact path="/rmp" Component={RateMyProfessor} />
            <Route exact path="/widgets" Component={Widgets} />
            <Route exact path="/internships" Component={Internships} />
        </div>
        </Router>
    )
};

export default App;