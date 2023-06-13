import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <>
      {/*Breadcrumbs reference: https://www.makeuseof.com/create-breadcrumbs-in-reactjs/ */}
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
          to="/about"
          className={
            location.pathname.startsWith("/about")
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          About
        </NavLink>
      </nav>

      <h1>About</h1>
      <div className="AboutDescription">
        <p>
          Hello! This is my app to compare the number of covid cases between
          countries.{" "}
        </p>
        <p>
          As this is dependant on an API, it is scalable as long as there is an
          available API! 😄
        </p>
      </div>
    </>
  );
}
