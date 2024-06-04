import React from 'react'
import {about} from "./Images.jsx"
function About() {
  return (
    // <><!-- About Start -->
    <div class="container-xxl py-5">
        <div class="container py-5 px-lg-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p class="section-title text-secondary">About Us<span></span></p>
                    <h1 class="mb-5">#1 Digital solution with 5+ years of experience</h1>
                    <p class="mb-4">At Social Life, we are more than just a design agency; we are storytellers, innovators, and creators.</p>
                    <p class="mb-4">We focus largely on:</p>
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <p class="mb-2">Digital Marketing</p>
                            <p class="mb-2">85%</p>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-primary" role="progressbar"  style={{width:"85%"}}></div>
                        </div>
                    </div>
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <p class="mb-2">Social Media Marketing</p>
                            <p class="mb-2">90%</p>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-secondary" role="progressbar" style={{width:"90%"}}></div>
                        </div>
                    </div>
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <p class="mb-2">Web Design</p>
                            <p class="mb-2">95%</p>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-dark" role="progressbar" style={{width:"95%"}}></div>
                        </div>
                    </div>
                    <a href="" class="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Read More</a>
                </div>
                <div class="col-lg-6">
                    <img class="img-fluid wow zoomIn" data-wow-delay="0.5s" src={about}/>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default About