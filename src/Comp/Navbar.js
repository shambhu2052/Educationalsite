import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import $ from "jquery";

function Navbar() {
 



  return (
    <>
   <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#">Reve<span>al</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link " href="#">Service</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Pages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <form className="d-flex form" role="search">
  <input className="form-control me-2 hide" type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-outline-success show" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
</form>
       </div>
  </div>
</nav>
<Routes>
        <Route path="/" element={<Home/>} />
      </Routes>

    </>
  )
}

export default Navbar