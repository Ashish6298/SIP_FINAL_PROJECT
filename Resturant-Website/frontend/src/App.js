
import React, { useState } from "react";
import Axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NavBar from "./components/pages/NavBar"
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Menu from "./components/pages/Menu";
import Veg from "./components/Veg";
import Nonveg from "./components/Nonveg";



function App() {
  return (

    // const App=()>{


      // getData = async () => {
      // const response = await Axios.get("http://localhost:3001/getData");
      // setData(response.data);
      // const [data, setData] = useState();



      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/veg" element={<Veg />} />
            <Route path="/nonveg" element={<Nonveg />} />



          </Routes>
        </BrowserRouter>

      </>


 


   
    
  );
};

export default App;