


import React from 'react'
import '../../styles/start.css'
import  trainerImg from '../../assets/img/trainer.png'




const Start = () => {
  return <section id='classes'>
    <div className="container">
            <div className="start__wrapper">
                <div className="start__img">
                    <img src={trainerImg} alt="" />
                </div>
                 <div className="start-container">
                    <h2 className="section__title">
                         Read to make a <span className='Healthly'>change?</span> 
                    </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit maxime alias, dicta officiis corrupti ducimus non vitae repudiandae, laborum minima odio autem perferendis aspernatur possimus, facere quos iusto rem ad.</p>
                    <button className="register__btn"> Get Started

                    </button>
                 </div>
            </div>
    </div>
  </section>
}

export default Start
