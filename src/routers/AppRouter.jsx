import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";



import HomePage from '../Pages/HomePage';
import NavBar from "../components/NavBar";
const AppRouter = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter