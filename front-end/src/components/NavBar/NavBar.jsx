import "./nav-bar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="sign-in">Sign In</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
