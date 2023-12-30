const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const nocache = require('nocache')

const port = process.env.PORT || 8082
const app = express()

const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(nocache())


app.use(express.static('public'))
app.set('view engine','ejs')
app.set('views','views')


app.use('/user',userRouter)
app.use('/admin',adminRouter)




mongoose.connect(process.env.MONGO_URL)
.then((data)=>{
    console.log('Database Connected SUCCESFUL');
    app.listen(port,()=> console.log('App is listening at',port))
})
.catch((err)=> console.log(err))