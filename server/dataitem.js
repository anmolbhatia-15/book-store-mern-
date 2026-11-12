const mongoose=require('mongoose')

const Dataschema=new mongoose.Schema({
    name:String,
    author:String,
    price:Number,
    publish:Date,
    owner:String,

})
const Dataitem=mongoose.model('bookitem',Dataschema)
module.exports=Dataitem

