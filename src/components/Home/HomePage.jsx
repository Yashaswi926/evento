import React from 'react'
import "./HomePage.css"

const HomePage = () => {
  return (
    <div className="home-page-wrapper">
        <div className="hp">
            <p className="hp1">How it work ?</p>
            <p className="hp2">You can choose to display featured</p>
        </div>
        <div className="tellwrapper">
            <div className="tellcard">
                <img src="/images/icons/search-globe.png" alt="" />
                <p className="hpt1">Choose What to do</p>
                <p className="hpt2">Easily find your event via search system with multiple params.</p>
            </div>
            <div className="tellcard">
                <img src="/images/icons/earth-globe.png" alt="" />
                <p className="hpt1">Booking event that you like</p>
                <p className="hpt2">Choose Ticket add to cart. Support payment via Woocommerce system.</p>
            </div>
            <div className="tellcard">
                <img src="/images/icons/ticket.png" alt="" />
                <p className="hpt1">Get the ticket to attend</p>
                <p className="hpt2">After booking successfully, You will get ticket in email or download in your account</p>
            </div>
        </div>
    </div>
)
}

export default HomePage