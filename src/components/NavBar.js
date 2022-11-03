import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className="top-section">
    <h1>
      <NavLink to="/">
        Bookstore CMS
      </NavLink>
    </h1>
    <nav>
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
