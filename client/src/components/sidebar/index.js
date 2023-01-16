import "./index.scss";
import HomeIcon from "@mui/icons-material/Home";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SecurityIcon from "@mui/icons-material/Security";
import BuildIcon from "@mui/icons-material/Build";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Hamburger from "./hamburger";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const [navActive, setNavActive] = useState(true);
  const navigates = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (
      navigates.pathname === ("/register") ||
      navigates.pathname === ("/login")
    ) {
      setNavActive(false);
    } else {
      setNavActive(true);
    }
  }, [navActive, navigates]);


  let user = JSON.parse(window.localStorage.getItem('user'));

  const logout = () =>{
    localStorage.clear();
    navigate("/login")
  }
  return (
    <>
      {navActive && (
        <div className="sidebar">
          <div className="toggle">
            <Hamburger />
          </div>
          <div className="logo">
            <img
              src="https://cdn.battlefy.com/helix/images/logos/logo-battlefy-white.svg"
              alt="logo"
            />
          </div>
          <hr />
          <ul>
            <li>
              <HomeIcon />
              <Link to="/">Home</Link>
            </li>
            <li>
              <DateRangeIcon />
              <Link to="/JoinedTournament">Joined Tournaments</Link>
            </li>
            <li>
              <SecurityIcon />
              Armoury
            </li>
            <li>
              <BuildIcon />
              Organize Tournaments{" "}
              <ArrowForwardIosIcon className="arrow_right" />
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <HelpOutlineIcon />
              Help Center
            </li>
          </ul>
          {user ?   <div className="user_data">
            <div className="notification">
              <h6>NOTIFICATIONS</h6>
            </div>


            <div className="user">
              <div className="image">
                <img
                  ng-src="https://cdn.battlefy.com/helix/images/store/happy-crazy-face"
                  src="https://cdn.battlefy.com/helix/images/store/happy-crazy-face"
                />
              </div>
              <h4 className="user_name">{user.user.userName}</h4>
            </div>

             <div className="log">
              <h6 onClick={logout}>Logout</h6>
            </div>
            

          </div>:<div className="user_data"> 
          <div className="log">
              <h6 onClick={logout}>Login</h6>
            </div>
            </div> }
        </div>
      )}
    </>
  );
};

export default Sidebar;
