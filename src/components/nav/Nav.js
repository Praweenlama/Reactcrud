import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Pagenotfound from '../errors/Pagenotfound'
import User from '../User/User'
import Apiusers from '../User/Apiusers'
import PostUser from '../User/PostUser'
import {Edit} from '../User/Edit'
import { Show } from '../User/Show'

export default function Nav(props) {
    let users=[
        {
            id:1,
            name:"Prabin"
        },
        {
            id:2,
            name:"Hari"
        },
        {
            id:3,
            name:"Krishna"
        }
    ]
    return (
        <div>
            <div className="flex justify-start bg-blue-400 text-gray-200">
                <Link className='p-3 hover:bg-blue-200' to="/">Home</Link>
                <Link className='p-3 hover:bg-blue-200' to="/about">About</Link>
                {
                    users.map((user,id)=>
                        <Link key={id} className='p-3 hover:bg-blue-200' to={`/user/${user.id}/${user.name}`}>{user.name}</Link>
                    )
                }
                <Link className='p-3 hover:bg-blue-200' to="/users">Users</Link>
                <Link className='p-3 hover:bg-blue-200' to="/users/add">Add Users</Link>
            </div>
            
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/user/:id/:name' element={<User/>} />
            <Route path='/users' element={<Apiusers users={props.datas} />} />
            <Route path='/users/add' element={<PostUser />} />
            <Route path='/edit/:id' element={<Edit />}/>
            <Route path='/show/:id' element={<Show />}/>
            <Route path='*' element={<Pagenotfound />} />
        </Routes>
        </div>
    )
}
