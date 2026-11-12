import React from 'react'

const Data = ({books=[],deletes}) => {

  return (
    <div className='data'>
      <form className='headdata'>
        <label htmlFor="">Book</label>
        <label htmlFor="">Author</label>
        <label htmlFor="">Book Title</label>
        <label htmlFor="">Selling Price</label>
        <label htmlFor="">Publish</label>
        <label htmlFor="">Action</label>
    
      </form>
{
  books.length===0?(
     <div className='datashowhere'>
<h1>EMPTY</h1>
 </div>):(books.map((item,index)=>(
  <div className='datarow' key={index}>
    <span>{item.name}</span>
    <span>{item.author}</span>
    <span>${item.price}</span>
    <span>{item.publish?item.publish.slice(0,10):''}</span>
    <button onClick={()=>deletes(item._id)} >delete</button>
   
  </div>)
 ))
  
}
    </div>
  )
}

export default Data
