const formData = document.querySelector('.signup-fom')
const submitBtn = document.querySelector('.login-btn')
const errorPara = document.querySelector('.error-message')
const passEye = document.querySelector('.bi-eye')

const emailInput = document.getElementsByName('email')[0]
const passwordInput = document.getElementsByName('password')[0]

const emailLabel = document.querySelector('.emailLabel')
const passwordLabel = document.querySelector('.passwordLabel')


const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/




submitBtn.addEventListener('click',async(e)=>{
    e.preventDefault()
    const formDataObject = new FormData(formData)
    try {
        const response = await fetch('/user/signup',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(Object.fromEntries(formDataObject))
        })

        if(!response.ok){
            const result = await response.json()
            errorPara.style.visibility = 'visible'
            
            errorPara.innerHTML = result.error
            setTimeout(() => {
                errorPara.style.visibility = 'hidden'
            }, 4000);
        }
        else{
            errorPara.style.visibility = 'visible'
            errorPara.innerHTML = 'Signup Succesfull please Login'
            errorPara.classList.add('success-message')
            setTimeout(() => {
                window.location.href='/user/login' 
            }, 400);
        }

    } catch (error) {
        console.log('Fetch error at /user/signup path',error);
    }
})

passEye.onclick = () =>{
    if(passEye.classList.contains('bi-eye')){
        passEye.classList.replace('bi-eye','bi-eye-slash')
        passwordInput.type = 'text'
    }
    else{
        passEye.classList.replace('bi-eye-slash','bi-eye')
        passwordInput.type = 'password'
    }
    if(passwordInput.type = 'text'){
        setTimeout(() => {
            passwordInput.type = 'password'
            passEye.classList.replace('bi-eye-slash','bi-eye')
        }, 2000);
    }
}



emailInput.onblur = () => {
    if(emailInput.value === ''){
        emailLabel.innerHTML = 'Email'
        emailLabel.classList.remove('redlabel')
    }
    else if(!emailRegex.test(emailInput.value)){
        emailLabel.innerHTML = 'Please provide a valid Email'
        emailLabel.classList.remove('greenlabel')
        emailLabel.classList.add('redlabel')
    }
    else{
        emailLabel.innerHTML = 'Email <i class="bi bi-check"></i>'
        emailLabel.classList.remove('redlabel')
        emailLabel.classList.add('greenlabel')
    }
}


passwordInput.onblur=() => {
    if(passwordInput.value === ''){
        passwordLabel.innerHTML = 'Email'
        passwordLabel.classList.remove('redlabel')
    }
    else if(!passwordRegex.test(passwordInput.value)){
        passwordLabel.innerHTML = 'Please provide a valid Password'
        passwordLabel.classList.remove('greenlabel')
        passwordLabel.classList.add('redlabel')
    }
    else{
        passwordLabel.innerHTML = 'Password <i class="bi bi-check"></i>'
        passwordLabel.classList.remove('redlabel')
        passwordLabel.classList.add('greenlabel')
    }
}