import "./SignIn.css";
import { SignInCard } from "../../components/sign-in-card/SignInCard";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="main-container">
      <div className="mobile-navbar">
        <div className="mobile-logos">
          <img src="./vector-7.svg" className="logo" />
          <div className="main-heading">BASE</div>
        </div>
      </div>
      <div className="left-side-container">
        <img src="./vector-7.svg" className="logo" />
        <div className="main-heading">BASE</div>
        <div className="logos">
          <img src="./github-icon.png" className="dashboard-logo" alt="logo" />
          <img src="./twitter-icon.png" className="dashboard-logo" alt="logo" />
          <img
            src="./linkedin-icon.png"
            className="dashboard-logo"
            alt="logo"
          />
          <img src="./discord-icon.png" className="dashboard-logo" alt="logo" />
        </div>
      </div>
      <div className="right-side-container">
        <Link to="/upload">
          <SignInCard />
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
