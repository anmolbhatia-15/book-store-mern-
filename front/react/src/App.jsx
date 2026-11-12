import React from 'react'

import Form from './Form'
import Data from './Data'
import Signup from './Signup'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './Login'
import Welcome from './Welcome'
import Dashboard from './Dashboard'
import Private from './Private'
import Notfound from './404page'

const App = () => {
  return (
    <>
    {/* <Header/>
    <Form/>
    <Data/> */}

 <BrowserRouter>
  <Routes>
    
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>

    <Route path="/home" element={
      <Private><Welcome/></Private>
      }/>
    <Route path="/dashboard" element={
      <Private>
        <Dashboard/>
      </Private>
      
      }/>
      <Route path='*' element={<Notfound/>} />
  </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
