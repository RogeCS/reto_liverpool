import React from "react";
import boloIcon from "../assets/static/Bolo.png";
import "../assets/styles/components/BoloNotFound.scss";

const BoloNotFound = () => (
  <section className="chatbot__container">
    <div className="chatbot__container--background">
      <div className="chatbot__container--border">
        <div className="chatbot__container--img bounce-1">
          <img src={boloIcon} alt="Chatbot" />
        </div>
      </div>
    </div>
  </section>
);

export default BoloNotFound;
