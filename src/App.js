import React from "react";
// import react router dom
import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import pages
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
// import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
// import Notpage from "./pages/Notpage";

const App = () => {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path = '/' element={<HomePage/>} />
          <Route path='/product/:id' element={<ProductDetails/>} /> 
          {/* <Route path = '*' element={<Notpage/>} /> */}
        </Routes>
        <Sidebar/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
