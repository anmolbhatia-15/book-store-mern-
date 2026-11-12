import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router'

axios.defaults.withCredentials=true
const Private = ({children}) => {

    const [login,setLogin]=useState(null)
useEffect(()=>{
axios.get('http://localhost:3500/home')
.then(()=>setLogin(true))
.catch(()=>setLogin(false))
},[])

if(login===null)return <h2><Navigate to='/login'/></h2>
if(login===false)return <Navigate to='/login'/>

  return children
   
}

export default Private
