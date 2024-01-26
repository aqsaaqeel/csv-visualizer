import "./Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-heading-container">
        <div className="subtract-frame">
          <img className="subtract-icon" alt="" src="/subtract.svg" />
        </div>
        <Link to="/" className="logo-link"><h3 className="navbar-heading">Base</h3></Link>
      </div>

      <ul className="navbar-items-list">
        <li className="navbar-item">
          <img
            className="navbar-item-icon"
            loading="eager"
            alt=""
            src="/dashboard.png"
          />
          <div className="navbar-item-text">Dashboard</div>
        </li>
        <li className="navbar-item">
          <img
            className="navbar-item-icon"
            loading="eager"
            alt=""
            src="/upload.png"
          />
          <div className="navbar-item-text">Upload</div>
        </li>
        <li className="navbar-item">
          <img
            className="navbar-item-icon"
            loading="eager"
            alt=""
            src="/invoice.png"
          />
          <div className="navbar-item-text">Invoice</div>
        </li>
        <li className="navbar-item">
          <img
            className="navbar-item-icon"
            loading="eager"
            alt=""
            src="/schedule.png"
          />
          <div className="navbar-item-text">Schedule</div>
        </li>
        <li className="navbar-item">
          <img
            className="navbar-item-icon"
            loading="eager"
            alt=""
            src="/calendar.png"
          />
          <div className="navbar-item-text">Calendar</div>
        </li>
        <li className="navbar-item">
          <img
            className="navbar-item-icon"
            loading="eager"
            alt=""
            src="/notification.png"
          />
          <div className="navbar-item-text">Notification</div>
        </li>
        <li className="navbar-item">
          <img
            className="navbar-item-icon"
            loading="eager"
            alt=""
            src="/settings.png"
          />
          <div className="navbar-item-text">Settings</div>
        </li>
      </ul>
    </nav>
  );
};
