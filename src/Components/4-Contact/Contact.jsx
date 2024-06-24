import React from "react";
import "./Contact.css";
import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";
import doneAnimation from "../../Animations/dontAnimation.json"; 
import contactAnimation from "../../Animations/contact.json"; 

export default function Contact() {
  const [state, handleSubmit] = useForm("xeojjebp");
  return (
    <section className="contact">
      <h1 className="title">
        <span className="icon-envelope" />
        Contact us
      </h1>
      <p className="subtitle">
        Contact us for more information and Get notified when I publish
        something new
      </p>
      <div style={{justifyContent: "space-between"}} className="flex">
        <form onSubmit={handleSubmit} action="" className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "submitting ..." : "submit"}
          </button>
          {state.succeeded && (
            <p
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
              className="flex"
            >
              <Lottie
                loop={false}
                style={{ height: "37px" }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌🏻
            </p>
          )}
        </form>

        <div className="animation"> 
        <Lottie
                loop={true}
                style={{ height: "370px" }}
                animationData={contactAnimation}
              />
        </div>
      </div>
    </section>
  );
}
