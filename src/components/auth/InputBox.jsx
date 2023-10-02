import React, { useState } from 'react'
import "./login/index.css"


const InputBox = ({type , placeholder , name , data}) => {
  const [value , setValue] = useState(null);

  if(!type){
    return <input type="text" className="inputbox"/>
  }
  data.current[name] = value;

  return (
    <>
        <input style={(()=>{
          if (name === 'password') {
            // return {width: '90%'}
          }
        })()} className="inputbox" type={type} id="" placeholder={placeholder} onChange={(e)=> setValue(e.target.value)}/> 
    </>
  )
}

export default InputBox;