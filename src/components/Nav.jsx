import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/comparator">Comparator</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contactMe">Contact Me</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
