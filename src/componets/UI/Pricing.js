import React from "react";
import "../../styles/pricing.css";
const Pricing = () => {
  return (
    <section id="pricing-plan ">
      <div className="container">
        <div className="pricing-top">
          <h2 className="section__title">
            Gym <span className="Healthly">Pricing</span> Plan
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
            Ullam porro obcaecati aliquid dolorum et esse.
          </p>
        </div>
        {/* =================== Pricing wrapper ============ */}
        <div className="pricing__wrapper">
            <div className="pricing_item">
                <div className="pricing__card__top">
                    <h2 className="section__title">Regular Member</h2>
                    <h2 className="pricing section__title">$50 <span>/month</span></h2>

                </div>

  

              <div className="servises">
                <ul>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal tranier</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> 5 classes per week</li>
                </ul>
                <button className="register__btn">Join Now</button>
              </div>


            </div>

            <div className="pricing_item pricing__item-02">
                <div className="pricing__card__top">
                    <h2 className="section__title">Premium Member</h2>
                    <h2 className="pricing section__title">$100 <span>/month</span></h2>

                </div>

  

              <div className="servises">
                <ul>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal tranier</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> 5 classes per week</li>
                </ul>
                <button className="register__btn">Join Now</button>
              </div>


            </div>

            <div className="pricing_item">
                <div className="pricing__card__top">
                    <h2 className="section__title">Standart Member</h2>
                    <h2 className="pricing section__title">$150 <span>/month</span></h2>

                </div>

  

              <div className="servises">
                <ul>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal tranier</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> 5 classes per week</li>
                </ul>
                <button className="register__btn">Join Now</button>
              </div>


            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
