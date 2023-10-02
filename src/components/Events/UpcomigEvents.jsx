import React, { useState } from 'react'
import "./index.css"

import { useEffect } from 'react'
import axios from "axios"


const EventCard = ({data})=>{
    
    return (
        <div className="eventcard">
                <img src={data.file} alt="" />
                <div className="cardoptions">
                    {/* <img src="https://icons.iconarchive.com/icons/pictogrammers/material/256/account-circle-icon.png" alt="" /> */}
                    <span class="material-symbols-outlined">account_circle</span>
                    <span>|</span>
                    <p>{data.author}</p>
                    <span>|</span>
                    <span class="material-symbols-outlined heart">
                    favorite
                    </span>
                </div>
                <p>{data.event}</p>
                <div className="schedule">
                    <span class="material-symbols-outlined">
                        schedule
                    </span>
                    <p>{data.date} , {data.time}</p>
                </div>
                <div className="schedule">
                    <span class="material-symbols-outlined">
                        pin_drop
                    </span>
                    <p>{data.location}</p>
                </div>
                <div className="pricebtn">
                    <a>Get Tickets</a>
                    <p>₹{data.minprice} - ₹{data.maxprice}</p>
                </div>
            </div>
    )
}

const UpcomigEvents = () => {

    const [item , setItem] = useState([])

    useEffect(()=>{
        try{
            async function getevent(){
                const data = await axios({
                    method : "GET",
                    url : "/api/v1/getEvents"
                })
                setItem(data.data)
            }
            getevent()

        }catch(err){
            alert("Got error")
        }
    } , [])

  return (
    
    <div className="eventwrapper">
        <div className="ehead">
            <p className="pehead1">Upcoming Events</p>
            <p className="pehead2">you can choose what to featured</p>
            <hr />
        </div>

        <div className="eventcardcont">
            {
                item.map((element , index)=>{
                    return <EventCard key={index} data={element}/>
                })
            }
        </div>
    </div>
  )
}

export default UpcomigEvents