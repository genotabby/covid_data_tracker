import { NavLink } from "react-router-dom";

export default function ContactBreadcrumbs() {
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
    </>
  );
}
