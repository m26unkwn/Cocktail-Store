import React from "react";
import Contact from "./Footer";

const About = () => {
  return (
    <>
      <section className='section about-section'>
        <h1 className='section-title'>about us</h1>
        <p>
          Cheers, We have all the cocktial info at one place beacuse we
          arecocktail Store. If you want to know about cocktail you have just
          search for it and get all desire result.
        </p>
      </section>
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <Contact />
      </div>
    </>
  );
};

export default About;
