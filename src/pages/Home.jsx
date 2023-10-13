import React from "react";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="content-wrapper">
        <div className="columns">
          <div className="column">
            <div className="h5">SO, YOU WANT TO TRAVEL TO</div>
            <div className="h1">Space</div>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="column circle-wrapper">
            <div className="circle">Explore</div>
          </div>
        </div>
      </div>
    </div>
  );
};
