import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [datas, setdata]=useState([]);

  useEffect(()=>{
    // fetch(" http://localhost:3333/users").then((result)=>{
    //   result.json().then((response)=>{
    //     setdata(response);
    //   })
    // })
    getalldata();
  },[]
  )

  const getalldata=async ()=>{
    const resp=await axios.get("http://localhost:3333/users/").catch((error)=>{
      console.log("something Error Occured");
    })
    setdata(resp.data);
    // console.log(resp.data[0]);
  }

  
  return (
    <div className="App px-20 bg-blue-300 ">
      <Nav datas={datas}/>
    </div>
  )
}

export default App;
