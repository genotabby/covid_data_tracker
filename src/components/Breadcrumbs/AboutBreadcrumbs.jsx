import { NavLink } from "react-router-dom";

export default function AboutBreadcrumbs() {
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
    </>
  );
}
