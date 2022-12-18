import React, { useRef, useEffect } from "react";
import "../../styles/header.css";
import MyLogo from "../../assets/img/dumble.png";

const navLisnks = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#schedule",
    display: "Schedule",
  },
  {
    path: "#classes",
    display: "Classes",
  },
  {
    path: "#pricing-plan",
    display: "Pricing",
  },
];

const Header = () => {
  //  ==========================   Navbar qismini kodlari scrool qilganda yotibqoladi
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);
  

  const handClick = e =>  {
  e.preventDefault()

  const targetAttr = e.target.getAttribute('href')
  const location = document.querySelector(targetAttr).offsetTop;

  window.scrollTo({
    left:0,
    top: location - 80
  })
  }



  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* ================== Logo ======================= */}
          <div className="logo">
            <div className="logo__img">
              <img src={MyLogo} alt="MyLogo" />
            </div>
            <h2>FitBody</h2>
          </div>
          {/* ============= Navigation Menu =========== */}
          <div className="navigation">
            <ul className="menu">
              {navLisnks.map((item) => (
                <li className="nav__item">
                  <a onClick={handClick} href={item.path}> {item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* =============== Nav Right ============== */}

          <div className="nav__right">
            <button className="register__btn ">Register</button>
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
