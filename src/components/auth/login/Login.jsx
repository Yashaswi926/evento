import React from 'react'
import { useState , useRef } from 'react'
import "./index.css"
import axios from "axios";

import NavBar from '../../NavBar/NavBar'

import InputBox from '../InputBox'
import toast from 'react-hot-toast';

const Login = () => {
    const authdata = useRef({})

    const [eye , setEye] = useState("visibility_off")
    const [passwordtype , setPasswordtype] = useState("password")
    const handleEye = ()=>{
        eye == "visibility_off" ? setEye("visibility") : setEye("visibility_off")
        passwordtype == "password" ? setPasswordtype("text") : setPasswordtype("password")
    }

    const loginNow = () => {
        let a = authdata.current
        if(!a.username || !a.password){
            toast.error("username or password is required")
            return null
        }
        try{
            async function login() {
                const data = await axios({
                    method : "POST",
                    url : '/api/v1/login',
                    data : authdata.current
                })
                if(data.data.result){
                    let q = data.data.result

                    let token = btoa(JSON.stringify({
                        username : q.username,
                        userid : q._id.toString(),
                        useremail : q.email
                    }))
                    localStorage.setItem('token', token)
                    toast.success("Login Successfully !")
                    setTimeout(()=>{
                        window.location.href = "/"
                    } , 2000)
                }else{
                    toast.error("User not found")
                }
                
            }
            login()

        }catch(e){
            toast.err("Couldn't login")
        }
    }

  return (
    <>
        <NavBar/>
        <div className="loginwrapper">
            <div className="head">
                <p>Login</p>
            </div>
            <div className="inputcont">
            <InputBox type={"text"} placeholder={"Username or Email"} name={"username"} data={authdata}/>
            </div>
            <div className="inputcont">
                <InputBox className="passwordInput" type={passwordtype} placeholder={"Password"} name={"password"} data={authdata}/>
                <span class="material-symbols-outlined" onClick={()=>{handleEye()}}>
                {eye}
                </span>
            </div>
            
            <div className="loginbtn" onClick={loginNow}>
                <img src="/images/icons/key.png" alt="" />
                <p>Login</p>
            </div>
        </div>
    </>
    
  )
}

export default Login