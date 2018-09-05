import React from "react";
import Navbar from "../Components/Navbar/index";
import Container from "../Components/Container/index";


const Home = () => {
    return (
        <div>
        <Navbar />
        <div className="jumbotron text-center">
        <h3>Everyone Successful Everyday!</h3>
        </div>
        <Container />
        </div>
    )

};

export default Home;