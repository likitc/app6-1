import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Home from './home'
import Products from './products'

export default function NavlinkRoute() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav nav-pills">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="*" className="nav-link">Link</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
