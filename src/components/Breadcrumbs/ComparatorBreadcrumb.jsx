import { NavLink } from "react-router-dom";

export default function comparatorBreadcrumb() {
  return (
    <nav>
      {/*Breadcrumbs reference: https://www.makeuseof.com/create-breadcrumbs-in-reactjs/ */}
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
    </nav>
  );
}
