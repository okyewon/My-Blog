import React from "react";
import { Outlet, Link } from "react-router-dom";

function TechPage() {
  return (
    <>
      <div>
        <h1>TechPage</h1>
        <Link to="/tech/javascript">Javascript</Link>
        <Link to="/tech/react">React</Link>
      </div>
      <Outlet />
    </>
  );
}

export default TechPage;
