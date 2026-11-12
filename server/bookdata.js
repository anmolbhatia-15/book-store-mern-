 const mongoose=require('mongoose')

 const Bookdata=new mongoose.Schema({
    name:String,
    email:String,
    password:String
 })
 const Book=mongoose.model('bookdata',Bookdata)
 module.exports=Book