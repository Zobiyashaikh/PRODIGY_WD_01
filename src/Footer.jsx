import React from "react";
import './Footer.css'
function Footer() {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <>
     <footer id="footer" class="new_footer_area bg_color" onFooterReached={() => setFixed(false)}> 
        <div class="new_footer_top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                  style={{visibility:"visible", animationDelay:"0.2sec", animationName: "fadeInLeft"}}
                >
                   
                   <h5 style={{fontSize:"50px"}}>Social Life</h5>
                   <p style={{fontSize:"20px"}}>Your Vision our mission</p>
    </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{visibility:"visible", animationDelay: "0.4s", animationName: "fadeInLeft"}}
                >
                  {/* <h3 class="f-title f_600 t_color f_size_18">Quick Links</h3>
                  <ul class="list-unstyled f_list">
                    <li>
                     Contact: sociallife0915@gmail.com
                    </li>
                    <li>
                      Location: Mumbai,Maharashtra
                    </li>
                    <li>
                     Instagram : 
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Workshops</a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  style={{visibility:"visible",animationDelay:"0.6s",animationName:"fadeInLeft"}}
                >
                  <h3 class="f-title f_600 t_color f_size_18" style={{fontSize:"30px"}}>Services</h3>
                  <ul class="list-unstyled f_list">
                    <li>
                      <a href="#">Social Media Marketing</a>
                    </li>
                    <li>
                      <a href="#">Product Marketing</a>
                    </li>
                    <li>
                      <a href="#">Logo Design</a>
                    </li>
                    <li>
                      <a href="#">Video Editing</a>
                    </li>
                    <li>
                      <a href="#">SEO Optimizing</a>
                    </li>
                    <li>
                      <a href="#">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#">Workshops</a>
                    </li>
    </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                  style={{visibility:"visible",animationDelay:"0.8s",animationName:"fadeInLeft"}}
               
                >
                  <h3 class="f-title f_600 t_color f_size_18" style={{fontSize:"30px"}} >
                   Contact Us
                  </h3>
                  <div class="f_social_icon">
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fa fa-envelope"></a>
                    <a href="#" class="fa fa-phone-square" aria-hidden="true"></a>
                    {/* <a href="#" class="fab fa-pinterest"></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer_bg">
            <div class="footer_bg_one"></div>
            <div class="footer_bg_two"></div>
          </div>
        </div>
        <div class="footer_bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-sm-7">
                <p class="mb-0 f_400">
                  © Social Life Inc.. {year} All rights reserved.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
