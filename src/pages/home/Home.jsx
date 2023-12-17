import "./home.scss";
import React, { useState } from "react";
import { BackgroundHoc } from "../../components";
import { homeObj } from "../../constants/homeConstants";

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "/images/bg_home_desktop.jpg"
  );

  const { subtitle, title, tagline, buttonText } = homeObj;
  return (
    <>
      <BackgroundHoc backGroundImage={backgroundImage}>
        <section className="home wrapper">
          <div className="home__two_columns">
          <div className="home__separator">
            <h3 className="home__subtitle">{subtitle}</h3>
            <h1 className="home__title">{title.toUpperCase()}</h1>
            <p className="home__tagline">{tagline}</p>
          </div>
          <button className="home__button">{buttonText.toUpperCase()}</button>
          </div>
        </section>
      </BackgroundHoc>
    </>
  );
};

export default Home;
