import React from "react";
import "./Style.css";
import "./Bootstrap.min.css";
import { Hero } from "./Images.jsx";
import About from "./About.jsx";
import Facts from "./Facts.jsx";
import Services from "./Services.jsx";

import Footer from "./Footer.jsx";
import Projects from "./Projects.jsx";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>  <div class="container-xxl  p-0">
         <div class="container-xxl position-relative p-0">
          <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" class="navbar-brand p-0">
       <a href="/Home"><h1 class="m-0" Link="/About">Your Vision, Our Mission</h1> </a>  
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav mx-auto py-0">
                <a href="/Home" class="nav-item nav-link active">
                  Home
                </a>
                <a href="/About" class="nav-item nav-link">
                  About
                </a>
                <a href="/Services" class="nav-item nav-link">
                  Service
                </a>
                <a href="/Projects" class="nav-item nav-link">
                  Project
                </a>
                <a href="/Contact" class="nav-item nav-link">
                  Contact
                </a>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScQgEOdYaefKr2ozzb8DwqLxgElbeFbqml-0WGBXld13Dz1Ew/viewform" target="_blank"
                class="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
              >
                Design Workshops
              </a>
            </div>
          </nav>

          <div class="container-xxl bg-primary hero-header">
            <div class="container px-lg-5">
              <div class="row g-5 align-items-end">
                <div class="col-lg-6 text-center text-lg-start">
                  <h2
                    class="text-white  animated slideInDown"
                    style={{ fontSize: "35px" }}
                  >
                    Welcome to, 
                  </h2> <h2 class=" animated slideInDown"
                    style={{ fontSize: "35px", color:"yellow" }}> Social Life!</h2>
                  <p class="text-white pb-3 animated slideInDown">
                    {" "}
                    Here design meets innovation, and every pixel tells a
                    story.<br/>Let us transform your ideas into visual masterpieces
                    that leave a lasting impression and elevate your brand to
                    new heights
                  </p>
                  {/* <a href="" class="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Read More</a> */}
                  <a
                    href=""
                    class="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
                <div class="col-lg-6 text-center text-lg-start">
                  <img class="img-fluid animated zoomIn" src={Hero} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
       
        
      </div>
      <About />
        <Facts />
       
        <Services />
      <Projects/>
        <Footer />
    </>
  );
}

export default Home;
