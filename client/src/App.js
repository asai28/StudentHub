import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import Internships from "./Pages/Internships";
import Navbar from "./Components/Navbar/index";
// import RateMyProfessor from "./Pages/RateMyProfessor";
// import Widgets from "./Pages/Widgets";

const App = () => {
    return (
        <Router>
        <div>
        <Navbar />
        <Switch>
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/rmp" component={RateMyProfessor} />
        <Route exact path="/widgets" component={Widgets} /> */}
        <Route exact path="/internships" component={Internships} />
        </Switch>
    </div>
    </Router>
    );      
};

export default App;
    