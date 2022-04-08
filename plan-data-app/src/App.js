import React, { Fragment } from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  NavLinkProps, Router
} from "react-router-dom";
import AddPlan from "./components/AddPlan";
import ViewPlan from "./components/ViewPlan";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to='/addPlan'>addPlan</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to='/viewPlan'>viewPlan</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
            <Route path='/' elements={<AddPlan />} />
            <Route path='/addPlan' element={ <AddPlan />} />
            <Route path='/viewPlan' element={ <ViewPlan />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
