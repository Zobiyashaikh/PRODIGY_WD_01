import React from 'react'
import './Projects.css'
import { Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5,Portfolio6 } from "./Images.jsx";
function Projects() {
  return (
    <>
    <div className='container-xxl '> 
    <div class="container-1 ">
            <div class="gallery">
         
                <figure class="gallery__item gallery__item--1">
                    <img src={Portfolio1} alt="Gallery image 1" class="gallery__img"/>
                </figure>
                <figure class="gallery__item gallery__item--2">
                    <img src={Portfolio2} alt="Gallery image 2" class="gallery__img"/>
                </figure>
                <figure class="gallery__item gallery__item--3">
                    <img src={Portfolio3} alt="Gallery image 3" class="gallery__img"/>
                </figure>
                <figure class="gallery__item gallery__item--4">
                    <img src={Portfolio4} alt="Gallery image 4" class="gallery__img"/>
                </figure>
                <figure class="gallery__item gallery__item--5">
                    <img src={Portfolio5} alt="Gallery image 5" class="gallery__img"/>
                </figure>
                <figure class="gallery__item gallery__item--6">
                    <img src={Portfolio6} alt="Gallery image 6" class="gallery__img"/>
                </figure>
            </div>
        </div>
        </div>
        
  
    </>
  )
}

export default Projects