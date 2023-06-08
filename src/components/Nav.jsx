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
            <NavLink to="/Comparator">Comparator</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/ContactMe">Contact Me</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
