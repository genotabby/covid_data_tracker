import { NavLink } from "react-router-dom";
import "../styles/breadcrumbs.css";

export default function ContactMe() {
  return (
    <>
      <nav>
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
          to="/contactMe"
          className={
            location.pathname.startsWith("/contactMe")
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          Contact Me
        </NavLink>
      </nav>
      <h1>Contact Me</h1>
      <div className="AboutDescription">
        <p>Hello! If you have any questions you may contact me at: </p>
        <a href="mailto:teohwesley@gmail.com">teohwesley@gmail.com</a>
      </div>
    </>
  );
}
