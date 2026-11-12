import React, { useEffect, useState } from 'react'

import Data from './Data'
import Form from './Form'
import axios from 'axios'
import Header from './Header'
const Dashboard = () => {
  const [books,setBooks]=useState([])
  const loadBooks=()=>{
    axios.get('http://localhost:3500/books')
    .then((res)=>setBooks(res.data))
    .catch((err)=>console.log(err))
  }
  useEffect(()=>{
    loadBooks()
  },[])
  const handledelete=(id)=>{
    axios.delete(`http://localhost:3500/delete/${id}`)
    .then(()=>loadBooks())
  }

  return (
    <div>
<Header/>
<Form onAdded={loadBooks} />
<Data books={books} deletes={handledelete} />
    </div>
  )
}

export default Dashboard
