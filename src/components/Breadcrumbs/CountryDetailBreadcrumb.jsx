import { NavLink } from "react-router-dom";

export default function CountryDetailsBreadcrumb(id) {
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
          to="/comparator"
          className={
            // location.pathname.startsWith("/comparator")
            location.pathname === "/comparator"
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
            location.pathname === `/comparator/country/${id}`
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          Country
        </NavLink>
      </nav>
    </>
  );
}
