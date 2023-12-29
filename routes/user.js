const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')



router.get('/login',userController.getLogin)
router.get('/signup',userController.getSignup)
router.get('/home',userController.getHome)


module.exports = router
