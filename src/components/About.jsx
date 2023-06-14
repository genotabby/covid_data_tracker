import { NavLink } from "react-router-dom";
import AboutBreadcrumbs from "./Breadcrumbs/AboutBreadcrumbs";

export default function About() {
  return (
    <>
      <AboutBreadcrumbs />

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
