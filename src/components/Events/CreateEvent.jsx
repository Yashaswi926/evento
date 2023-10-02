import React, { useRef  , useState} from 'react'
import "./createEvent.css"
import NavBar from "../NavBar/NavBar"
import InputBox from "../auth/InputBox"
import axios from "axios"
import toast from 'react-hot-toast'

const CreateEvent = () => {
    const token = localStorage.getItem("token")

    const [file , setFile] = useState("");

    const gotoLocation = (x) => {
        window.location.href = x
    }

    function handleImageSelect(e) {
        const file = e.target.files[0];
        if(file.size > 2006680){
            alert("Select minimum size image")
            return null;
        }
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
            const base64Image = e.target.result;
                setFile(base64Image);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file.');
            return;
        }

        try {
            const data = await axios({
                method : "POST",
                url : "/api/v1/upload",
                data : {
                    file,
                    token,
                    data : ref.current
                },
            })
            if(data.data.status){
                toast.success("Successfully Created Event");
                setTimeout(() =>{
                    window.location.reload()
                }, 2000)
            }else{
                toast.success("getting Error")
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };


    const ref = useRef({});
  return (
    <>
        <NavBar/>
        <div className="create-event-wrapper">
            <p>Create Your Own Event</p>
            {
                token ? (
                    <div className="create-cont">
                        <div className="upload">
                            <img src="/images/icons/upload.png" alt="" />
                            <input type="file" id="avatar" accept="image/png, image/jpeg, image/jpg" onChange={handleImageSelect}/>
                        </div>

                        <div className="input-fields">
                            <InputBox type={"text"} placeholder={"Author Name"} name={"author"} data={ref}/>
                            <InputBox type={"text"} placeholder={"Event Name"} name={"event"} data={ref}/>
                            <InputBox type={"date"} placeholder={"Calender"} name={"date"} data={ref}/>
                            <InputBox type={"time"} placeholder={"Timing"} name={"time"} data={ref}/>
                            <InputBox type={"text"} placeholder={"Location"} name={"location"} data={ref}/>
                            <InputBox type={"number"} placeholder={"min price"} name={"minprice"} data={ref}/>
                            <InputBox type={"number"} placeholder={"max price"} name={"maxprice"} data={ref}/>
                            
                        </div>
                    </div>

                    ) : (
                        <div className="navigation-cont">
                            <h1>You are not logged in </h1>
                            <span>
                                <p>Login now</p>
                                <button onClick={()=> gotoLocation("/login") }>Login</button>
                            </span>
                            <span>
                                <p>Register Now</p>
                                <button onClick={()=> gotoLocation("/register") }>Register</button>
                            </span>
                        </div>
                    )
            }
            <button onClick={handleUpload}>Create My Event</button>
        </div>
        
    </>
  )
}

export default CreateEvent