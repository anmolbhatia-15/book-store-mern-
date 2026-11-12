import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Form = ({onAdded}) => {
    const [name,Setname]=useState('')
    const [author,Setauthor]=useState('')
    const [price,Setprice]=useState('')
    const [publish,Setpublish]=useState('')
    


    axios.defaults.withCredentials=true
    const handle=(e)=>{
    if(!name||!author||!price||!publish){
        e.preventDefault()
        alert('error')
        return
    }
e.preventDefault()
axios.post('http://localhost:3500/addbook',{name,author,price,publish})
.then(()=>{
Setname(''),Setauthor(''),Setprice(''),Setpublish('')
onAdded()


})

    }
    return (
        <div className='book-form'>
            <form action="" onSubmit={handle}>
                <h1>Add Book Here </h1>
                <label htmlFor="">Book Name</label>
                <input type="text" name='name' placeholder='Book Name' value={name}
                onChange={(e)=>Setname(e.target.value)}
                 />

                <label htmlFor="">Author</label>
                <input type="text" name='author' placeholder='Author Name'
                 onChange={(e)=>Setauthor(e.target.value)} value={author}
                />


                <label htmlFor="">Selling Price</label>
                <input type="number" name='selling' placeholder='Price'
                onChange={(e)=>Setprice(e.target.value)} value={price}
                />

                <label htmlFor="">Publish</label>
                <input type="date" name='date' placeholder='Publish'
                  onChange={(e)=>Setpublish(e.target.value)}  value={publish}/>

                <button className='btn'>SUBMIT</button>
            </form>
        </div>
    )
}

export default Form