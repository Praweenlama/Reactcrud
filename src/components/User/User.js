import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const params = useParams();
    console.log(params)
    return (
        <div>
            <p className='text-xl font-semibold'>This is dynamic Routing</p>
            User_Id:  {params.id}<br />
            User_Name: {params.name}
            <br />
            <hr />
        </div>
    )
}

export default User
