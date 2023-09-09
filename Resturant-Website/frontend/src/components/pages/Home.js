import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Style.css"

const Home = () => {
  return (
    
    <div className="min-vh-100">
      <div className="text-center">
        <svg

        
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 24 24"
        >
          
          <path
            fill="currentColor"
            d="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105727/8_big33.png"
          />

      
        </svg>{" "}
        <Link to="/login">
      <button class="btn22">LOGIN</button>
         
          </Link>

        
          <Link to="/signup">
          <button class="btn1">SIGNUP</button>         
          </Link>

        <h1>FOOD HUB</h1>
      </div>
      <h6 className="text-center">BEST FOOD</h6>
   

   

    
      <div className="p-5">
      
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/images/rr.jpeg" class="d-block w-100 h-10" alt="..." />
            </div>
         
            <div class="carousel-item">
              <img src="/images/rak.jpg" class="d-block w-100 h-10" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/images/las.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>


        </div>
        
      </div>
    </div>
  );
};

export default Home;