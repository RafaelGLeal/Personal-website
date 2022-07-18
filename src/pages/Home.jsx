import React from "react";
import { Link } from "react-router-dom";
import ShapeCircle from "../assets/shapeCircle.png";
import Button from "../components/Buttons";
const Home = () => {
  return (
    <>
      <section className="home">
        <Link to="/contact" className="contactPage">
          <i class="bx bx-envelope"></i> get in touch
        </Link>
        <div className="container">
          <img src={ShapeCircle} alt="" />
          <img src={ShapeCircle} alt="" />
          <h1>creative developer</h1>
          <Button text="See Projects" />
        </div>
        <div className="icons-fixed">
          <ul>
            <li>
              <a href="https://google.com">
                <i className="bx bxl-linkedin-square"></i>
                <span>
                  Linkedin <i class="bx bx-chevron-right"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://google.com">
                <i className="bx bxl-github"></i>
                <span>
                  Github <i class="bx bx-chevron-right"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
