import { NavLink } from 'react-router-dom';

const img = require('../assets/user.png');

const NavBar = () => (
  <header className="top-section d-flex">
    <h1>
      <NavLink to="/" className="logo">
        Bookstore CMS
      </NavLink>
    </h1>
    <nav className="d-flex">
      <NavLink to="/">
        Books
      </NavLink>
      <NavLink to="categories">
        Categories
      </NavLink>
    </nav>
    <img src={img} alt="user" />
  </header>
);

export default NavBar;
