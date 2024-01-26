import "./SignIn.css";
import { SignInCard } from "../../components/sign-in-card/SignInCard";
import { Link } from "react-router-dom";
const SignIn = () => {

  return (
    <div className="main-container">
      <div className="right-side" />
      <div className="frame-parent">
        <div className="base-wrapper">
          <h1 className="base">BASE</h1>
        </div>
        <div className="vector-parent">
          <img
            className="vector-icon"
            loading="eager"
            alt=""
            src="/github-icon.png"
          />
          <img
            className="vector-icon1"
            loading="eager"
            alt=""
            src="/twitter-icon.png"
          />
          <div className="carbonlogo-linkedin">
            <img
              className="vector-icon2"
              loading="eager"
              alt=""
              src="/linkedIn-icon.svg"
            />
          </div>
          <div className="carbonlogo-discord">
            <img
              className="vector-icon3"
              loading="eager"
              alt=""
              src="/discord-logo.svg"
            />
            <img className="vector-icon4" alt="" src="/vector-4.svg" />
          </div>
        </div>
        <div className="left-side-parent">
          <img className="left-side-icon" alt="" src="/left-side@2x.png" />
          <img
            className="frame-item"
            loading="eager"
            alt=""
            src="/vector-7.svg"
          />
        </div>
      </div>
      <img className="subtract-icon" alt="" />
      <Link to="/upload"><SignInCard /></Link>
    </div>
  );
};

export default SignIn;
