import React from "react";
import "../../styles/footer.css";
import logo from "../../assets/img/dumble.png";

const Footer = () => {

    const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo__img">
                <img src={logo} alt="MyLogo" />
              </div>
              <h2>FitBody</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
              qui dignissimos quae minus assumenda dolores.{" "}
            </p>
          </div>
          <div className="footer-box">
            <h3 className="footer__title"> Company</h3>
            <ul className="footer__links">
              <li>
                <a href="/">Our program</a>
              </li>
              <li>
                <a href="/">Our Plan</a>
              </li>
              <li>
                <a href="/">Become member</a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">Copyright {year} development by Jorabek,All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
