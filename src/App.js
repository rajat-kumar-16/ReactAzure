import React from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/about';
import Navbar from './components/navbar';
import Registration from './components/Registration';
import Crud from './components/CRUD/crud';
// import {Insert, Delete, DeleteById, Display, DisplayById, Update} from './components/CRUD';
import Insert from './components/CRUD/insert';
import Delete from './components/CRUD/delete';
import DeleteById from './components/CRUD/deleteById';
import Display from './components/CRUD/display';
import DisplayById from './components/CRUD/displayById';
import Update from './components/CRUD/update';
function App() {
  return (
    
    <div className="App">
      <Router>
      
        <Navbar/>    
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/crud" element={<Crud Opd="CRUD Operations"/>} />
          <Route path="/crud/insert" element={<><Crud Opd="Insert Operations"/><Insert/></>} />
          <Route path="/crud/update" element={<><Crud Opd="Update Operations"/><Update/></>} />
          <Route path="/crud/delete" element={<><Crud Opd="Delete Operations"/><Delete/></>} />
          <Route path="/crud/deleteById" element={<><Crud Opd="Delete By Id Operations"/><DeleteById/></>} />
          <Route path="/crud/display" element={<><Crud Opd="Display Operations"/><Display/></>} />
          <Route path="/crud/displayById" element={<><Crud Opd="Display By Id Operations"/><DisplayById/></>} />
          <Route path="" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
 