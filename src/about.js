import React, { useEffect } from "react"; // Impor useEffect
import aboutImage from "./images/lte_7.jpg";
import "./styles/About.css";
import $ from "jquery";

const About = () => {
  useEffect(() => {

    $("#aboutMePhoto").hover(
      function () {
        $(this).css({
          transform: "scale(1.1)",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)", 
          transition: "transform 0.3s ease, box-shadow 0.3s ease", 
        });

        $(".about-me-container").css({
          transform: "scale(1.02)", 
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)", 
          transition: "transform 0.3s ease, box-shadow 0.3s ease", 
        });
      },
      function () {
        $(this).css({
          transform: "scale(1)", 
          boxShadow: "none", 
        });

        // Kembalikan kontainer ke ukuran semula
        $(".about-me-container").css({
          transform: "scale(1)", 
          boxShadow: "none", 
        });
      }
    );

    return () => {
      $("#aboutMePhoto").off("hover");
    };
  }, []); // Array kosong memastikan efek dijalankan sekali

  return (
    <div className="about-me-container">
      <div className="about-me-box about-me-description">
        <h2>About Me</h2>
        <p>
          Hi, I am Madinatul Inadila. I am an active student at one of the
          campuses in Yogyakarta, namely Aisyiyah University Yogyakarta majoring
          in information technology. I am also active in the campus activity
          unit, namely Aisyiyah English Club as public relations. I come from
          Blitar East Java but now I live in Yogyakarta. I am able to work
          independently and in teams. I have 3 years of teamwork experience as
          data entry.
        </p>
      </div>

      <div className="about-me-box about-me-image">
        <img
          src={aboutImage}
          alt="About Me"
          className="about-me-photo"
          id="aboutMePhoto" 
        />
      </div>
    </div>
  );
};

export default About;
