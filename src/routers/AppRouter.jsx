import React from 'react'
import{BrowserRouter as Routes} from 'react-router-dom'
import NavBar from '../components/NavBar';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <NavBar/>
        
      </Routes>
    </>
  );
}

export default AppRouter