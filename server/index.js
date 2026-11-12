const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const Book=require('./bookdata')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser')
const Bookitem=require('./dataitem')

const app=express()
app.use(cors({
    origin:['http://localhost:5173'],
    methods:['GET','POST','DELETE','PUT'],
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect('mongodb://localhost:27017/Booklogin')
//////////guard
const verifyUser=(req,res,next)=>{
    const token=req.cookies.token
    if(!token){
        return res.json('not token')
    }else{
        jwt.verify(token,'jwtkk',(err,decoded)=>{
            if(err) return res.json('token is wrong')
              req.email=decoded.email
                next()
            })
    }
}
// app.get('/home',verifyUser,(req,res)=>{
//     return res.json("Success")
// })

//////////////////
app.post('/addbook',verifyUser,(req,res)=>{
    const{name,author,price,publish}=req.body
    Bookitem.create({name,author,price,publish,owner:req.email})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.get('/books',verifyUser,(req,res)=>{
    Bookitem.find({owner:req.email})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.delete('/delete/:id',verifyUser,(req,res)=>{
    Bookitem.findOneAndDelete({
        _id:req.params.id,
        owner:req.email})
    .then(()=>res.json('Delete'))
    .catch(err=>res.status(500).json(err))
})
app.post('/logout',(req,res)=>{
    res.clearCookie('token')
    res.json({
message:'Logout Done'
    })
})
/////////////////////
app.get('/home',verifyUser,(req,res)=>{
   
   Book.findOne({email:req.email})
   .then(user=>{
    if(user){
        res.json({name:user.name,email:user.email})
    }else{
        res.json('user not found')
    }
   })

})

/////////////signupapi
app.post('/signup',(req,res)=>{
    const{name,email,password}=req.body
    bcrypt.hash(password,10)
    .then(hash=>{
        Book.create({name,email,password:hash})
        .then(result=>res.json(result))
        .catch(err=>res.json(err))
    }).catch(err=>console.log(err.message))

})
///////////loginapi
app.post('/login',(req,res)=>{
    const {email,password}=req.body
    Book.findOne({email:email})
    .then(user=>{
        if(user){
            bcrypt.compare(password,user.password,(err,respone)=>{
                if(respone){
                    const token=jwt.sign({email:user.email},"jwtkk",{expiresIn:'1d'})
                    res.cookie('token',token)
                    res.json('Success')
                }else{
                    res.json('The password is incorrect')
                }

            })
        }else{
            res.json('err')
        }
    })
})
/////////////////item///////////







app.listen(3500,()=>{
    console.log('server starting....');
    
})