import { useCallback } from "react";
import { Link } from "react-router-dom";
export const SignInCard = () =>{
    const onButtonPrimaryClick = useCallback(() => {

    }, []);
  
    return(
        <form className="form-container">
        <div className="main-container-parent">
          <h1 className="main-container1">Sign In</h1>
          <div className="main-container-to">Sign in to your account</div>
        </div>
        <div className="frame-container">
          <button className="white-parent">
            <div className="white">
              <div className="button" />
            </div>
            <img className="google-icon-1" alt="" src="/googleicon-1@2x.png" />
            <div className="main-container-with">Sign in with Google</div>
          </button>
          <div className="white-group">
            <div className="white1">
              <div className="button1" />
            </div>
            <img className="apple-1-icon" alt="" src="/apple-1@2x.png" />
            <input
              className="main-container-with1"
              placeholder="Sign in with Apple"
              type="text"
            />
          </div>
        </div>
        <div className="card-parent">
          <div className="card">
            <div className="card1" />
          </div>
          <div className="email-address-parent">
            <div className="email-address">Email address</div>
            <div className="input-field-parent">
              <div className="input-field">
                <div className="input-field1" />
              </div>
              <input
                className="johndoegmailcom"
                placeholder="johndoe@gmail.com"
                type="text"
              />
            </div>
          </div>
          <div className="password-parent">
            <div className="password">Password</div>
            <div className="input-parent">
              <div className="input" />
              <input className="input1" placeholder="••••••••" type="text" />
              <div className="frame-inner" />
            </div>
          </div>
          <div className="forgot-password-wrapper">
            <div className="forgot-password">Forgot password?</div>
          </div>
          <button className="button-primary-parent">
            <div className="button-primary">
              <Link to="/upload"><div className="button-primary1" onClick={onButtonPrimaryClick} /></Link>
            </div>
            <b className="main-container2">Sign In</b>
          </button>
        </div>
        <div className="dont-have-an-account-registe-wrapper">
          <div className="dont-have-an-container">
            <span className="dont-have-an">{`Don’t have an account? `}</span>
            <span className="register-here">Register here</span>
          </div>
        </div>
      </form>
    )
}