import React from 'react'
import { useState , useRef } from 'react'
import "../login/index.css"
import axios from "axios";

import NavBar from '../../NavBar/NavBar'

import InputBox from '../InputBox'

import toast from 'react-hot-toast'

const Signup = () => {
   
    const authdata = useRef({})
    const [eye , setEye] = useState("visibility_off")
    const [passwordtype , setPasswordtype] = useState("password")
    const handleEye = ()=>{
        eye == "visibility_off" ? setEye("visibility") : setEye("visibility_off")
        passwordtype == "password" ? setPasswordtype("text") : setPasswordtype("password")
    }

    const registerNow = () => {
        let a = authdata.current
        if(!a.username || !a.password || !a.email){
            toast.error("username or password is required")
            return null
        }

        if( a.password != a.cnfpassword){
            toast.error("Password Does Not Match")
            return null
        }
        try{
            async function register() {
                const data = await axios({
                    method : "POST",
                    url : '/api/v1/register',
                    data : authdata.current
                })
                console.log(data.data)
                if(data.data.data){
                    let q = data.data.data

                    let token = btoa(JSON.stringify({
                        username : q.username,
                        userid : q._id.toString(),
                        useremail : q.email
                    }))
                    localStorage.setItem('token', token)
                    toast.success("Register Successfully !")
                    setTimeout(()=>{
                        window.location.href = "/"
                    } , 2000)
                }else{
                    toast.error("User Already Exist !")
                }
                
            }
            register()

        }catch(e){
            toast.err("Couldn't login")
        }
    }
  return (
    <>
        <NavBar/>
        <div className="loginwrapper">
            <div className="head">
                <p>Signup</p>
            </div>
            <div className="inputcont">
            <InputBox type={"text"} placeholder={"Username"} name={"username"} data={authdata}/>
            </div>
            <div className="inputcont">
            <InputBox type={"email"} placeholder={"Email"} name={"email"} data={authdata}/>
            </div>
            <div className="inputcont">
                <InputBox  className="passwordInput" type={passwordtype} placeholder={"Password"} name={"password"} data={authdata}/>
                <span class="material-symbols-outlined" onClick={()=>{handleEye()}}>
                {eye}
                </span>
            </div>
            <div className="inputcont">
            <InputBox type={"text"} placeholder={"Confirm Password"} name={"cnfpassword"} data={authdata}/>
            </div>
            <div className="loginbtn" onClick={registerNow}>
                <img src="/images/icons/key.png" alt="" />
                <p>Register</p>
            </div>
        </div>
    </>
    
  )
}

export default Signup