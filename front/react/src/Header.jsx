import React from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
const Header = () => {
const navigate=useNavigate()
  const logout=()=>{
   axios.post('http://localhost:3500/logout',{},{
    withCredentials:true
   })
  .then((result)=>{
  console.log(result.data);
  navigate('/login')} )
  }
  return (
    <div className='header'>
      <h1 className='logo'>BOOKLEAF</h1>
   <button onClick={logout}>Logout</button>
    </div>
  )
}

<ul>
    <li></li>
</ul>

export default Header
