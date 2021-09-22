import React from "react";
import { Route, Switch } from "react-router";
import { BrandHome } from "./BrandHome";
import { NavBar } from "./Navbar";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <NavBar />
        <BrandHome />
      </Route>

      <Route>
        <section>
          <div style={{ width: "50%", margin: "auto" }}>
            <h3>404 | Page Not Found</h3>
          </div>
        </section>
      </Route>
    </Switch>
  );
}
export { Routes };
