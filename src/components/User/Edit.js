import { React, useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Edit = () => {

    const { id } = useParams();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpass] = useState("")


    useEffect(() => {
        const postdata = async () => {
            const user = await axios.get(`http://localhost:3333/users/${id}`).catch((error) => {
                console.log("Something wrong");
            })

            setname(user.data.name);
            setemail(user.data.email);
            setpass(user.data.password);
        }
        postdata();
    }, [id])

    const saveuser = (e) => {
        e.preventDefault();

        let data = {
            name, email, password
        }

        const postdata = async () => {
            await axios.put(`http://localhost:3333/users/${id}`, data)
                .then(() => {
                    setname("");
                    setemail("");
                    setpass("");
                })
                .catch((error) => {
                    console.log("Something wrong");
                })
        }
        postdata();
    }
    return (
        <div>
            <div className='flex justify-center'>
                <p>Update User</p><br></br>
            </div>
            <div className='w-8/12 mx-auto'>
                <form onSubmit={saveuser} method="POST">
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



                    <button type='submit' className='bg-green-400 px-3 py-2 rounded font-semibold'>Update</button>
                </form>
            </div>
        </div>
    )
}
