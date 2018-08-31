import React from "react";
import "./Container.css";

const Container = () => {
    return (
        <div className="container">
        <div className="row text-center">
        <div className="col-lg-4">
        <img src={"https://bloximages.newyork1.vip.townnews.com/laloyolan.com/content/tncms/assets/v3/editorial/2/a2/2a274d71-8277-5bd1-be25-c65cdb710e42/5ac80d20dfc1e.image.jpg?resize=1200%2C600"}
        alt={"Rate my Professor"}
        />
        </div>
        <div className="col-lg-4">
        <img src={"https://sundayskills.com/wp-content/uploads/2018/03/cover-image.jpg"}
        alt={"Papers"}
        />
        </div>
        <div className="col-lg-4">
        <img src={"https://i1.wp.com/www.metacenterchicago.com/wp-content/uploads/2018/02/the-positive-implications-of-internships-961x600.jpg?fit=961%2C600&ssl=1"}
        alt={"Internships"}
        />
        </div>
        </div>
        </div>
        )
}

export default Container;