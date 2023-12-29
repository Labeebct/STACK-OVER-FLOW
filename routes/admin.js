const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')


router.get('/home',adminController.getHome)


    
module.exports = router