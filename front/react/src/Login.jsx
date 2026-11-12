import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'

axios.defaults.withCredentials=true;
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
     const navigate=useNavigate()


     const handleLogin=(e)=>{
      if(!email||!password){
        e.preventDefault()
        alert('err')
        return
      }
      e.preventDefault()
      axios.post('http://localhost:3500/login',{email,password})
      .then(result=>{
        if(result.data==="Success"){
          navigate('/home')
        }else{
          console.log('user not found');
          
        }
      })

     }

  return (
    <div>
       <div className='login'>
      <form action="" onSubmit={handleLogin} >
        <h1>Login for BOOKLEAF</h1>

        <label htmlFor="">Email</label>
        <input type="email" name='email' placeholder='email'
         onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" name='password' placeholder='password'
         onChange={(e)=>setPassword(e.target.value)}/>
        <button>Login</button>
      </form>
      <p>  Don't have an account? 
        <Link to='/signup'>SignUp</Link>
      </p>
      

    </div>
    </div>
  )
}

export default Login
 