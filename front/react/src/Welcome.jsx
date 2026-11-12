import React from 'react'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
const Welcome = () => {
    const navigate=useNavigate()
    const[name,setName]=useState('')
    axios.defaults.withCredentials=true
    useEffect(()=>{
     axios.get('http://localhost:3500/home')
     .then((res)=>setName(res.data.name))
     .catch(()=>navigate('/login'))
    },[])
  return (
    <div className='welcomepage'>
    
    <h2>Welcome to BOOKLEAF, {name.toUpperCase()}</h2>
       <p>Add, organize, and manage all your books in one place.</p>

   <div className='feature'>
    <span>Add book in seconds</span>
    <span>Delete anytime</span>
    <span>Everything in one place</span>
   </div>
   <div className='welcomebtn'>
    <Link to="/Dashboard">ADD BOOKS</Link>
    
   </div>
    </div>
  )
}

export default Welcome

