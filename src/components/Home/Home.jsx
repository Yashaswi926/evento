import React from 'react'
import { useState } from 'react';
import "./index.css"




const Home = () => {
    const [imageValue , setImageValue] = useState(0);
    return (
        <>
        <div className="homewrapper">
            <div className="img-slider-cont">
                <img src="/images/contest/5.jpg" alt="" className="sliderwrapper" />
            </div>
            <div className="search-field">
                <p className="ps1">
                    Connecting The World
                </p>
                <p className="ps2">Easy to search, you just enter the keyword</p>

                <div className="inputfieldcont">
                    <div className="srchinp">
                        <span class="material-symbols-outlined">search</span>
                        <input className="inputfield" type="text" placeholder="Search Events" />
                    </div>
                    <div className="fieldsel">
                        <span class="material-symbols-outlined">
                            list
                        </span>
                        <select className="selectfield" name="category" id="">
                            <option disabled selected hidden style={{color : "grey"}}>Select Category</option>   
                            <option value="Big">Big</option>
                            <option value="Medium">Medium</option>
                            <option value="Small">Small</option>
                        </select>
                    </div>
                    <div className="fieldsel">
                        <span class="material-symbols-outlined">
                            event
                        </span>
                        <select className="selectfield" name="time" id="">
                            <option value="/">All Time</option>
                            <option value="Big">Big</option>
                            <option value="Medium">Medium</option>
                            <option value="Small">Small</option>
                        </select>
                    </div>
                    <div className="searchbtndiv">
                        <button className="searchbtn">Search</button>
                    </div>
                </div>

                <div className="textslider">
                    <marquee>
                        A free event is taking place on 19th October 2023
                    </marquee>                    
                </div>
            </div>
        </div>
        <div className="category-cont">
            <div className="eventcards">
                <span class="material-symbols-outlined">currency_rupee</span>
                <div>
                    <p className="pe1">Business</p>
                    <p className="pe2">1 Event</p>
                </div>
                
            </div>
            <div className="eventcards">
                <span class="material-symbols-outlined">music_note</span>
                <div>
                    <p className="pe1">Concert</p>
                    <p className="pe2">1 Event</p>
                </div>
                
            </div>
            <div className="eventcards">
                <span class="material-symbols-outlined">brunch_dining</span>
                <div>
                    <p className="pe1">Food & Drink</p>
                    <p className="pe2">1 Event</p>
                </div>
            </div>
            <div className="eventcards">
                <span class="material-symbols-outlined">workspace_premium</span>
                <div>
                    <p className="pe1">Sports</p>
                    <p className="pe2">1 Event</p>
                </div>
            </div>
            <div className="eventcards">
                <span class="material-symbols-outlined">podium</span>
                <div>
                    <p className="pe1">Conference</p>
                    <p className="pe2">1 Event</p>
                </div>
            </div>
            <div className="eventcards">
                <span class="material-symbols-outlined">festival</span>
                <div>
                    <p className="pe1">Festivals</p>
                    <p className="pe2">1 Event</p>
                </div>
            </div>
            <div className="eventcards">
                <span class="material-symbols-outlined">school</span>
                <div>
                    <p className="pe1">Education</p>
                    <p className="pe2">1 Event</p>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Home