import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
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
        {/* <Link to="/login"> */}
          <span className="float-right">
            <button className="btn btn-danger">Login</button>
          </span>
          <span className="float-right mr-3">{Greeting}</span>
        {/* </Link> */}
      </h1>
    </nav>
  );
};

export default Navbar;

// const DisplayLinks = props => {
//   if (props.loggedIn) {
// return (
//   <nav className="navbar">
//     <ul className="nav">
//       <li className="nav-item">
//         <Link to="/" className="nav-link">
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link to="#" className="nav-link" onClick={props._logout}>
//           Logout
//         </Link>
//       </li>
//     </ul>
//   </nav>
// );
//   } else {
// return (
//   <nav className="navbar">
//     <ul className="nav">
//       <li className="nav-item">
//         <Link to="/" className="nav-link">
//           Home
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link to="/login" className="nav-link">
//           login
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link to="/signup" className="nav-link">
//           sign up
//         </Link>
//       </li>
//     </ul>
//   </nav>
// );
//   }
// };
