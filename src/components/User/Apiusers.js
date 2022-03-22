import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Apiusers() {

    const [users, setuser] = useState([]);
    const [status, setstatus] = useState(false);
    const [success, setsuccess] = useState('');


    useEffect(() => {
        // fetch(" http://localhost:3333/users").then((result)=>{
        //   result.json().then((response)=>{
        //     setdata(response);
        //   })
        // })
        getalldata();
    }, []
    )

    const getalldata = async () => {
        const resp = await axios.get("http://localhost:3333/users/").catch((error) => {
            console.log("something Error Occured");
        })
        setuser(resp.data);
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3333/users/${id}`).then(() => {
            setstatus(true);
            setsuccess(`User ${id} deleted`)
            // getalldata();
        }).catch((error) => {
            console.log(error)
        })
        setuser(users.filter((user) => {
            return user.id !== id;
        }))
    }
    return (
        <>
            <p className='text-2xl'>Apiusers</p><br />
            <div className='w-10/12 mx-auto'>
                {
                    status ?
                        <div className='bg-green-400 w-full mx-auto rounded flex justify-between items-center px-2'>
                            <p className='p-3 rounded'>{success}</p>
                            <span className='cursor-pointer' onClick={() => setstatus(false)}>&times;</span>
                        </div> : ""
                }
                <table className="table w-full overflow-hidden rounded">
                    <thead>
                        <tr className='border-b-2 border-black bg-gray-900 text-gray-200'>
                            <th className='px-3 py-2'>SN</th>
                            <th className='px-3 py-2'>Name</th>
                            <th className='px-3 py-2'>Email</th>
                            <th className='px-3 py-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={i} className="border-b-2 border-black">
                                    <td className='px-3 py-2 border-black text-center'>{i + 1}</td>
                                    <td className='px-3 py-2 border-black text-center'>{user.name}</td>
                                    <td className='px-3 py-2 text-center'>{user.email}</td>
                                    <td className='flex space-x-1 flex justify-center'>
                                        <Link className='bg-blue-400 px-3 py-2 rounded' to={`/edit/${user.id}`}>Edit</Link>
                                        <button className='bg-blue-400 px-3 py-2 rounded' onClick={() => handleDelete(user.id)}>Delete</button>
                                        <Link className='bg-blue-400 px-3 py-2 rounded' to={`/show/${user.id}`}>show</Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}
