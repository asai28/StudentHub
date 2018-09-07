import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./Pages/Home";
// import Internships from "./Pages/Internships";
import RateMyProfessor from "./Pages/RateMyProfessor";
// import Widgets from "./Pages/Widgets";
import SchedulerContainer from "./Pages/SchedulerContainer";
import "@progress/kendo-theme-default/dist/all.css";

const App = () => {
  return (
    <Router>
      <div>
        {/* <RateMyProfessor/> */}
        <Switch>
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/rmp" component={RateMyProfessor} />
          <Route exact path="/schedule" component={SchedulerContainer} />
          {/* <Route exact path="/internships" component={Internships} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
