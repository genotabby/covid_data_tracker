import { NavLink, useLocation } from "react-router-dom";
import "../styles/breadcrumbs.css";
export default function Nav() {
  const location = useLocation();
  return (
    <>
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
      {/* <nav>
        <NavLink
          to="/"
          className={
            location.pathname === "/"
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          Home
        </NavLink>
        <span className="breadcrumb-arrow">&gt;</span>
        <NavLink
          to="/comparator"
          className={
            location.pathname.startsWith("/comparator")
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          Comparator
        </NavLink>
        <span className="breadcrumb-arrow">&gt;</span>
        <NavLink
          to="/comparator/country/0"
          className={
            location.pathname.startsWith === "/comparator/country/"
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          Country
        </NavLink>
      </nav> */}
    </>
  );
}
