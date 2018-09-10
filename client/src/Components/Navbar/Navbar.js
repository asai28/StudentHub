import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
<<<<<<< HEAD
const Navbar = () => (
  <nav>
  <h1 className="text-center">#StudentHub
  <span className="float-right">
    <button className="btn btn-danger">Login</button>
  </span></h1>
  </nav>
);
=======
const Navbar = props => {
  let Greeting;
  if (props.user === null) {
    Greeting = <p>Hello Guest!</p>;
  } else if (props.user.firstName) {
    Greeting = (
      <p>
        Welcome back, <strong>{props.user.firstName}</strong>
      </p>
    );
  } else if (props.user.local.username) {
    Greeting = (
      <p>
        Welcome back, <strong>{props.user.local.username}</strong>
      </p>
    );
  }
  return (
    <nav>
      <h1 className="text-center">
        #StudentHub
        <span className="float-right">
          <Greeting />
          <button className="btn btn-danger">Login</button>
        </span>
      </h1>
    </nav>
  );
};
>>>>>>> 164448a773961499bb8f27db9f3840823d734ea2

export default Navbar;
