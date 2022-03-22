import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Home from '../Home';

export default function PostUser() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpass] = useState("");
    const [status, setstatus]=useState(false);
    const [success, setsuccess]=useState("");
    const navigate=useNavigate();


    const saveuser = (e) => {
        e.preventDefault();

        let data = {
            name, email, password
        }

        // fetch("http://localhost:3333/users", {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).then((response) =>
        //     response.json().then((result) => {
        //         console.log(result)
        //     })
        // )

        const postdata= async ()=>{
            
            await axios.post("http://localhost:3333/users", data).then(()=>{
                setstatus(true);
                setsuccess("Post Success");
            }).catch((error)=>{
                console.log("Something wrong");
            })
        }
        postdata();

    }
    return (
        <div>
            <div className='flex justify-center'>
                <p>PostUser</p><br></br>
            </div>

            <div className='w-8/12 mx-auto'>
            {
                status?
            <div className='bg-green-400 w-full mx-auto rounded flex justify-between px-2 items-center'>
                <p className='p-3 rounded'>{success}</p>
                <span className='cursor-pointer' onClick={() => setstatus(false)}>&times;</span>
            </div>:""
            }
                <form onSubmit={saveuser}>
                    <div className='mb-2'>
                        <label>User Name: </label>
                        <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter User..' className='rounded 
                        bg-blue-300 border-2 
                        border-gray-800 w-full' />
                    </div>

                    <div className='mb-2'>
                        <label>User Email: </label>
                        <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter Email' className='rounded bg-blue-300 
                        border-2 border-gray-800
                        w-full' />
                    </div>

                    <div className='mb-2'>
                        <label>Password: </label>
                        <input type="password" value={password} onChange={(e) => setpass(e.target.value)} placeholder='Enter Password..' className='rounded 
                        bg-blue-300 
                        border-2 
                        border-gray-800
                        w-full' />
                    </div>

                    <button type='submit' className='bg-green-400 px-3 py-2 rounded font-semibold'>Submit</button>
                </form>
            </div>
        </div>
    )
}
