import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Services from './components/Services/Services.jsx';
import Footer from "./components/Footer/Footer.jsx";
import Projects from './components/Works/Projects.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import Animate from './components/animate.jsx';


const App = () => {
 
  const [orderPopup, setOrderPopup] = React.useState(false);



  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden text-gray-100">
      <Router>
      
        <Routes>
        
          <Route
            path={"/"}
            element={
              <>
               
                <Navbar handleOrderPopup={handleOrderPopup} />
                <Hero handleOrderPopup={handleOrderPopup} />
                <Footer/>
              </>
            }
          />
          <Route path="/Projects"  element={
              <>
             
               <Navbar handleOrderPopup={handleOrderPopup} />
               <Projects/>
              </>}/>
          <Route path="/Services"   element={
              <>
               
               <Navbar handleOrderPopup={handleOrderPopup} />
               <Services/>
              </>}/>
       
            
        </Routes>
      </Router>
    </div>
  );
};

export default App;


