import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className="footerwrapper">

        <div className="appdetails">
            <div className="webdetails">
                <img src="/images/logo/site-logo.jpg" alt="" />
                <p>Streamline event planning with our user-friendly event registration app. Easily create, manage, and track events, registrations, and payments for seamless event experiences.</p>
                <div>
                    <a href="#" className="cmplogo"><img src="/images/icons/instagram.png" alt="" /></a>
                    <a href="#" className="cmplogo"><img src="/images/icons/facebook.png" alt="" /></a>
                    <a href="#" className="cmplogo"><img src="/images/icons/twitter.png" alt="" /></a>
                </div>
            </div>
            <div className="about">
                <p>About Us</p>
                <a href="#">About us</a>
                <hr />
                <a href="#">Submit Event</a>
                <hr />
                <a href="#">All Venues</a>
                <hr />
                <a href="#">All Locations</a>
                <hr />
            </div>
            <div className="contact">
                <p>Contact Us</p>
                <div>
                    <span           class="material-symbols-outlined">
                        pin_drop
                    </span>
                    <p>Netaji Subhas University of Technology , Dwarka Sec - 3</p>
                </div>
                <div>
                    <span           class="material-symbols-outlined">
                        mail
                    </span>
                    <p>evento@gmail.com</p>
                </div>
                <div>
                    <span           class="material-symbols-outlined">
                        smartphone
                    </span>
                    <p>+91 937983279349</p>
                </div>
                
            </div>
            <div className="downloadapp">
                <p>Download Our App</p>
                <img src="/images/icons/appstore.png" alt="" />
                <img src="/images/icons/playstore.png" alt="" />
               
            </div>
        </div>

        <div className="terms-cont">
            <div>
                <p>
                    eventy@2023 All Rights Reserved.
                </p>
                <div>
                    <a href="">Terms of Use</a>
                    <span>|</span>
                    <a href="">Privacy & Policy</a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer