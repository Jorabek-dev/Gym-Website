import React from "react";
import "../../styles/exrises.css";
import lunges from "../../assets/img/lunges.png";
import yoga from "../../assets/img/yoga-pose.png";
import exdens from "../../assets/img/extended.png";

const Exrises = () => {
  return (
    <section id="schedule">
      <div className="container exercise__container">
        <div className="exercise_top">
          <h2 className="section__title">
            Benefits of <span className="Healthly">Exercise</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Quaerat, qui. Odio repudiandae fuga expedita unde.
          </p>
        </div>
        {/* ==================  Exercise List ============== */}
        <div className="exercise__wrapper">
          <div className="exercise__item">
            <span className="exercise__icon">
              <img src={lunges} alt="" />
            </span>
            <div className="execrise__content">
                <h4>Healtly Life</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>




          <div className="exercise__item">
            <span className="exercise__icon">
              <img src={yoga} alt="" />
            </span>
            <div className="execrise__content">
                <h4>Incresed Flexbilitiy</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>




          <div className="exercise__item">
            <span className="exercise__icon">
              <img src={exdens} alt="" />
            </span>
            <div className="execrise__content">
                <h4>Reducing Blog Pressure</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>





        </div>
      </div>
    </section>
  );
};

export default Exrises;
