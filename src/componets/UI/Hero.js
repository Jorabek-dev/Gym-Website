import React from "react";
import HeroImg from "../../assets/img/gym-02.png";
import dubleIcon from "../../assets/img/dumble.png";
import '../../styles/hero.css';
const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero__wrapper">
          {/* =============== Hero Content  =====================*/}
          <div className="hero__content">
            <h2 className="section-title" data-aos='fade-up' data-aos-duration='1500'>
              Exercise is the key a <span className="Healthly">Healthly</span>{" "}
              Lifesstyles
            </h2>
            <p  data-aos='fade-up' data-aos-duration='2000' data-aos-delay='200'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptas
              modi doloribus reiciendis, laboriosam harum voluptatibus!
            </p>

            <div className="hero__btn " data-aos='fade-up' data-aos-duration='2000' data-aos-delay='200'>
              <button className="register__btn">Get Started</button>
              <button className="watch__btn">
                <span>
                  <i class="ri-play-fill"></i>
                </span>
                Watch Video
              </button>
            </div>
          </div>
          {/* ================ Hero img ====================== */}
          <div className="hero__img">
            <div className="hero__wrapper__img">
              <div className="box-1">
                <div className="box-2">
                  <div className="box-3">
                    <div className="box-img">
                      <img src={HeroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ======================== Hero Icons ============== */}

              <div className="heart-rate" data-aos='fade-right' data-aos-duration='2000' data-aos-delay='200'>
                <h5>Heart Rate</h5>
                <span>
                  <i class="ri-heart-pulse-fill"></i>
                </span>
                <h5>2677 BMAP</h5>
              </div>

              <div className="gym__location" data-aos='fade-left' data-aos-duration='2000' data-aos-delay='200'>
                <span>
                  <i class="ri-map-pin-2-fill"></i>
                </span>
                <h5>Find a new <br /> gym near you</h5>
              </div>

              {/* ================= Hero img ============================ */}

              <div className="duble__icon"data-aos='fade-down' data-aos-duration='2000' data-aos-delay='200'>
                <img src={dubleIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
