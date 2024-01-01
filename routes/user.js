const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')



router.get('/login',userController.getLogin)
router.post('/login',userController.postLogin)

router.get('/signup',userController.getSignup)
router.post('/signup',userController.postSignup)

router.get('/home',userController.getHome)

router.get('/questions',userController.getQuestions)

router.get('/userslist',userController.getUsersList)

router.get('/saves',userController.getSaves)

router.get('/companies',userController.getCompanies)

router.get('/profile',userController.getProfile)



module.exports = router
