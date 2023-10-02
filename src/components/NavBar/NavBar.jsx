import React from 'react'
import { useEffect } from 'react'

import "./index.css"

const NavBar = () => {

    const token = localStorage.getItem('token')

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div className="navbarwrapper">
        <div className="navcont">
            <div className="web-logo">
                <img className="web-logo" src="/images/logo/site-logo.jpg" alt="evento" />
            </div>
            <div className="menu">
                <a href="/" className="menu-links">Home</a>
                <a href="" className="menu-links">About</a>
                <a href="" className="menu-links">Events</a>
                <a href="" className="menu-links">Contact Us</a>
                <span class="material-symbols-outlined hamicon">
                    menu
                </span>
            </div>
            <div className="account-setting">
                <span class="material-symbols-outlined">
                    account_circle
                </span>
                {
                    token ? (
                        <>
                            <a onClick={handleLogout} className="menu-links">Logout</a>
                        </>

                    ) : (
                        <>
                            <a href="/login" className="menu-links">Login</a>
                            <span>/</span>
                            <a href="/register" className="menu-links">Register</a>
                        </>   
                    )
                }
                
            </div>
            <a href="/create-event" className="menu-links eventbtn">+ Create Event</a>
        </div>
    </div>
  )
}

export default NavBar;