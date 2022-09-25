import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";



import HomePage from '../Pages/HomePage';
import NavBar from "../components/NavBar";
import CheckOut from '../Pages/CheckOut';
import RegistroInicio from '../Pages/RegistroInicio';
import Producto from '../Pages/Producto';
import Productos from '../Pages/Productos';
import Porfile from '../Pages/Porfile';



const AppRouter = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container   ">
          {/* mt-5 pt-5 */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<CheckOut />} />

            <Route path="/registroInicio" element={<RegistroInicio />} />
            <Route path="/productos/:idproduct" element={<Producto />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/perfil" element={<Porfile />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default AppRouter