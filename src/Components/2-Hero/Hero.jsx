import React, { useRef } from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import developerAnimation from "../../Animations/developer.json";

export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img src="./images/Belal-Pic.jpg" className="avatar" alt="" />
          <div className="icon-verified" />
        </div>
        <h1 className="title">
          UI-UX designer, Web Developer.
        </h1>
        <div className="all-icons flex">
          <a href="https://www.facebook.com/belal.alimam" className="icon-twitter icon"></a>
          <a href="https://www.instagram.com/belalalimam/" className="icon-instagram icon"></a>
          <a href="https://github.com/Belalalimam" className="icon-github icon"></a>
          <a href="https://www.linkedin.com/in/belal-alimam-432b96257/" className="icon-linkedin-square icon"></a>
        </div>
      </div>
      <div className="right-section animation">
        {/* https://lottiereact.com/ */}
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
}
