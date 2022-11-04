import { NavLink } from 'react-router-dom';

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
  </header>
);

export default NavBar;
