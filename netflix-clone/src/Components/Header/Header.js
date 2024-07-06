import React from "react";
import "./Header.css";
import NetflixLogo from "../../assets/images/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="logo-nav">
          <div className="logo">
            <a href="/">
              <img src={NetflixLogo} alt="Netflix" />
            </a>
          </div>
          <nav className="nav_black">
            <ul>
              <li>
                <a href="#">Netflix</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">TV Shoes</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Latest</a>
              </li>
              <li>
                <a href="#">Browse</a>
              </li>
              <li>
                <a href="#">My List</a>
              </li>
              <li>
                <a href="#">Browse by Languages</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="user-actions">
          <li>
            <SearchIcon />
          </li>
          <li>
            <NotificationsNoneIcon />
          </li>
          <li>
            <AccountBoxIcon />
          </li>
          <li>
            <ArrowDropDownIcon />
          </li>
        </div>
      </div>
    </header>
  );
};

export default Header;
