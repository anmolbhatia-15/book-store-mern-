import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router'

const Signup = () => {
    const [name,SetName]=useState('')
    const [email,SetEmail]=useState('')
    const [password,SetPassword]=useState('')
    const navigate=useNavigate()

 const handlesignup=(e)=>{
    if(!name||!password||!email){
        e.preventDefault()
        alert('error')
        return
    }
    e.preventDefault()
    axios.post('http://localhost:3500/signup',{name,email,password})
    .then(result=>{
        console.log(result)
navigate('/login')
        
    })

 }

  return (
    <div className='signup'>
      <h1>Sign up   for BOOKLEAF</h1>
      <form action="" onSubmit={handlesignup}>
        <label htmlFor="">Name</label>
        <input type="text" name='name' placeholder='name' 
        onChange={(e)=>SetName(e.target.value)}
        />
        <br />
        <label htmlFor="">Email</label>
        <input type="email" name='email' placeholder='email'
         onChange={(e)=>SetEmail(e.target.value)} />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" name='password' placeholder='password'
         onChange={(e)=>SetPassword(e.target.value)}/>
        <button>Signup</button>
      </form>
      <p>Already have an account?
         <Link to='/login'>Login</Link>
       </p>

    </div>
  )
}

export default Signup

