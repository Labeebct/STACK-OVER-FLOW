const signupModel = require('../models/signupDatas')
const bcrypt = require('bcrypt')



const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/



exports.getLogin = (req, res) => {
  res.render("user/login");
};



exports.postLogin = (req, res) => {
  const { email , password } = req.body
  console.log(email);
};







exports.getSignup = (req, res) => {
  res.render("user/signup");
};





exports.postSignup = async(req, res) => {
  try {
    const signupDatas = req.body
    const {displayname , email , password } = signupDatas


    const salt = await bcrypt.genSalt(6) 
    const hashedPass = await bcrypt.hash(password , salt)

    const userDatas = await signupModel.find()
    const userExist = userDatas.find((data)=> data.email===email)
    
    const  newUserSchema = new signupModel({
      displayname:displayname,
      email:email,
      password:hashedPass,
      createdOn:Date.now()
    })

    if(displayname == '' || email == ''|| password == ''){
       res.status(400).json({error:'Complete all required Fields.'})
    }
    else if(!emailRegex.test(email)){
      res.status(400).json({error:'Please enter a valid Email Address.'})
    }
    else if(!passwordRegex.test(password)){
      res.status(400).json({error:'Please provide a valid Password.'})
    }
    else if(userExist){
      res.status(400).json({error:'User Already Exist.'})
    }
    else{
       await newUserSchema.save()

       console.log('User succesfully Registered');
       res.status(200).redirect('/user/login')
    }

  } catch (error) {
    res.status(500).send('Data send to DATABASE ERROR')
    console.log('Error in sending user datas to Database',error);
  }

};



exports.getHome = (req, res) => {
  const activeDiv = 'Home'
  res.render("user/user-home",{activeDiv})
};


exports.getQuestions = (req,res) => {
  const activeDiv = 'Questions'
  res.render('include/userHome/home-click-comp/questions',{activeDiv})
}

exports.getUsersList = (req,res) =>{
  const activeDiv = 'Users'
  res.render('include/userHome/home-click-comp/users.ejs',{activeDiv})
}

exports.getSaves = (req,res) =>{
  const activeDiv = 'Saves'
  res.render('include/userHome/home-click-comp/saves.ejs',{activeDiv})
}


exports.getCompanies = (req,res) =>{
  const activeDiv = 'Companies'
  res.render('include/userHome/home-click-comp/companies.ejs',{activeDiv})
}

exports.getProfile = (req,res) =>{
  const activeDiv = 'Profile'
  res.render('include/userHome/home-click-comp/profile.ejs',{activeDiv})
}

exports.getCompleteProfile = (req,res) =>{
   res.render('include/profile.ejs')
}