import './navBar.css';
import logo from './images/planet.png';

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
      <h1>Space Traveler &apos;s Hub</h1>
    </div>
  </header>
);

export default NavBar;
