import React, { useRef } from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import developerAnimation from "../../Animations/developer.json";

export default function Hero() {
  const lottieRef = useRef()
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img src="public/Belal-Pic.jpg" className="avatar" alt="" />
          <div className="icon-verified" />
        </div>
        <h1 className="title">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="sub-title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          delectus maiores beatae reiciendis, quos, iste minima sint quisquam
          magnam accusamus rem, perferendis officiis? Nostrum nemo aperiam
          asperiores fugit temporibus at.
        </p>
        <div className="all-icons flex">
          <div className="icon-twitter icon"></div>
          <div className="icon-instagram icon"></div>
          <div className="icon-github icon"></div>
          <div className="icon-linkedin-square icon"></div>
        </div>
      </div>
      <div className="right-section animation">
        {/* https://lottiereact.com/ */}
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(.5)
          }
          }
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
}
