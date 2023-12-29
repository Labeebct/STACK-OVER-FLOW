const express = require('express')
const dotenv = require('dotenv').config()
const nocache = require('nocache')
const path = require('path')

const port = process.env.PORT || 8082
const app = express()

const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(nocache())


app.use(express.static('public'))
app.set('view engine','ejs')
app.set('views','views')


app.use('/user',userRouter)
app.use('/admin',adminRouter)



app.listen(port,()=> console.log('App is listening at',port))