import React from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';
function Navbar(props) {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <Link className="navbar-brand" to="">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/registration">Registration</Link>
            </li>
          </ul>
          <span className="navbar-text">
          <Link className="nav-link" to="/crud">CRUD</Link>
          </span>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
 