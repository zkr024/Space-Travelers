import { NavLink } from 'react-router-dom';
import './navBar.css';
import logo from '../images/planet.png';

const NavBar = () => (
  <header>
    <div className="container">
      <div className="logo">
        <img
          src={logo}
          alt="app logo"
          className="appLogo"
        />
      </div>
      <h1>Space Traveler&apos;s Hub</h1>
    </div>
    <ul className="nav">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : 'notActive')}
      >
        Rockets
      </NavLink>
      <NavLink
        to="/missions"
        className={({ isActive }) => (isActive ? 'active' : 'notActive')}
      >
        Missions
      </NavLink>
      <NavLink
        to="/my_profile"
        className={({ isActive }) => (isActive ? 'active' : 'notActive')}
      >
        My Profile
      </NavLink>

    </ul>
  </header>
);

export default NavBar;
