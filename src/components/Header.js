import { useState } from "react";
import classes from "./Header.module.css";
import logo from "./img/logo.svg";
import services from "./img/services.svg";
import signup from "./img/signup.svg";
import price from "./img/price.svg";
import login from "./img/login.svg";
import about from "./img/about.svg";
import language from "./img/language.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <>
      <div className={classes.navContainer}>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <div
          className={classes.burger}
          onClick={() => setIsOpen(prevState => !prevState)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="" className={classes.langItem}>
                Turkish <span> &#x2304;</span>
              </a>
            </li>
            <li>
              <a href="">service</a>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">pricing</a>
            </li>
          </ul>

          <div className={classes.cta}>
            <a href="" className={classes.login}>
              Login
            </a>
            <a href="" className={classes.signup}>
              Signup
            </a>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div
          className={classes.overlay}
          onClick={() => setIsOpen(prevState => !prevState)}
        ></div>
      )}
      {isOpen && (
        <div
          className={classes.mobNav}
          onClick={() => setIsOpen(prevState => !prevState)}
        >
          <ul>
            <li>
              <img src={language} alt="language" />
              <a href="">Turkish</a>
            </li>
            <li>
              <img src={services} alt="services" />
              <a href="">Service</a>
            </li>
            <li>
              <img src={about} alt="about" />
              <a href="">About</a>
            </li>
            <li>
              <img src={price} alt="price" />
              <a href="">Pricing</a>
            </li>
            <li>
              <img src={login} alt="login" />
              <a href="">Login</a>
            </li>
            <li>
              <img src={signup} alt="signup" />
              <a href="">Signup</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
