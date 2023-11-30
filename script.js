let content = document.getElementsByClassName('inputfield')
console.log(content)


for (i = 0; i < content.length; i++) {
    content[i].addEventListener('blur', validateForm)
}












let passwordin


function validateForm(e) {

    
    let inputElement = e.target.id

    console.log(inputElement)
    if (inputElement === 'userName') {

        let userName = document.getElementById('userName')
        let userSpan = document.getElementById('userSpan')
        if (userName.value.trim() === '') {
            userSpan.innerHTML = "Enter a name"
            userSpan.style.color = "red"
            userName.style.border = "3px solid red"

            e.preventDefault();
        }
        else {
            // userSpan.innerHTML="UserName is valid"
            // userSpan.style.color="green"
            userName.style.border = "3px solid green"
            userSpan.innerHTML=''
        }

    }
    else if (inputElement == 'emailInp') {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let emailInp = document.getElementById('emailInp')
        let emailSpan = document.getElementById('emailSpan')
        if (!emailRegex.test(emailInp.value)) {
            emailSpan.innerHTML = "Enter Correct EmailId"
            emailSpan.style.color = "red"
            emailInp.style.border = "3px solid red"

            e.preventDefault();
        }
        else {
            // emailSpan.innerHTML="Valid email" 
            // emailSpan.style.color="green"
            // e.preventDefault();
            emailInp.style.border = "2px solid green"
            emailSpan.innerHTML=''

        }

    }
    else if (inputElement == 'Passwordf') {
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        passwordin = document.getElementById('Passwordf')
        let spanPassword = document.getElementById('passwSpan')
        if (!passwordRegex.test(passwordin.value)) {
            spanPassword.innerHTML = ("Enter valid Password")
            spanPassword.style.color = "red"
            passwordin.style.border = "3px solid red"
            e.preventDefault();


        }
        else {
            // spanPassword.innerHTML=("Valid Password")
            // spanPassword.style.color="green"
            // e.preventDefault();
            passwordin.style.border = "2px solid green"
            spanPassword.innerHTML=''



        }

    }
    else if (inputElement == 'conformPswrd') {
        let conformPassword = document.getElementById('conformPswrd')
        let conformSpan = document.getElementById('conformSpan')
        if (passwordin.value !== conformPassword.value) {
            conformSpan.innerHTML = "Enter correct Password"
            
            conformSpan.style.color = "red"
            
            e.preventDefault();

        }
        else if (conformPassword.value.trim() === '') {
            conformSpan.innerHTML = "Enter value"
            conformPassword.style.border = "2px solid red"
            conformSpan.style.color = "red"

        }
        else {
            // conformSpan.innerHTML="Matching Password"
            // conformSpan.style.color="green"
            conformPassword.style.border = "2px solid green"
            conformSpan.innerHTML = " "

            
        }

    }
    else if (inputElement == 'Phone') {




        phoneValidation = /^\d{10}$/;
        let conformPhone = document.getElementById('Phone')
        let phoneSpan = document.getElementById('spanPhone')
        if (!phoneValidation.test(conformPhone.value)) {
            phoneSpan.innerHTML = "Enter correct format"
            conformPhone.style.border="2px solid red"
            phoneSpan.style.color = "red"
            e.preventDefault();


        }
        else {
            // phoneSpan.innerHTML="Valid PhoneNumber" 
            // phoneSpan.style.color="green"
            conformPhone.style.border = "2px solid green"
            phoneSpan.innerHTML = " "
            

        }
    }










}








document.getElementById('validate').addEventListener('submit', function (e) {
    let userName = document.getElementById('userName')
    let userSpan = document.getElementById('userSpan')
    if (userName.value.trim() === '') {
        userSpan.innerHTML = "Enter a name"
        userSpan.style.color = "red"

        e.preventDefault();
    }
    else {
        // userSpan.innerHTML="UserName is valid"
        // userSpan.style.color="green"
        userName.style.border = "3px solid green"

        e.preventDefault();



    }
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailInp = document.getElementById('emailInp')
    let emailSpan = document.getElementById('emailSpan')
    if (!emailRegex.test(emailInp.value)) {
        emailSpan.innerHTML = "Enter Correct EmailId"
        emailSpan.style.color = "red"

        e.preventDefault();
    }
    else {
        // emailSpan.innerHTML="Valid email" 
        // emailSpan.style.color="green"
        // e.preventDefault();
        emailInp.style.border = "2px solid green"

    }
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let passwordin = document.getElementById('Passwordf')
    let spanPassword = document.getElementById('passwSpan')
    if (!passwordRegex.test(passwordin.value)) {
        spanPassword.innerHTML = ("Enter valid Password")
        spanPassword.style.color = "red"
        e.preventDefault();


    }
    else {
        // spanPassword.innerHTML=("Valid Password")
        // spanPassword.style.color="green"
        // e.preventDefault();
        passwordin.style.border = "2px solid green"


    }
    let conformPassword = document.getElementById('conformPswrd')
    let conformSpan = document.getElementById('conformSpan')
    if (passwordin.value !== conformPassword.value) {
        conformSpan.innerHTML = "Enter correct Password"
        conformPassword.style.border = "2px solid red"
        conformSpan.style.color = "red"
        e.preventDefault();

    }
    else if (conformPassword.value.trim() === '') {
        conformSpan.innerHTML = "Enter value"
        conformSpan.style.color = "red"

    }
    else {
        // conformSpan.innerHTML="Matching Password"
        // conformSpan.style.color="green"
        conformPassword.style.border = "2px solid green"
        e.preventDefault();
    }
    phoneValidation = /^\d{10}$/;
    let conformPhone = document.getElementById('Phone')
    let phoneSpan = document.getElementById('spanPhone')
    if (!phoneValidation.test(conformPhone.value)) {
        phoneSpan.innerHTML = "Enter correct format"
        // conformPhone.style.border="2px solid red"
        phoneSpan.style.color = "red"
        e.preventDefault();


    }
    else {
        // phoneSpan.innerHTML="Valid PhoneNumber" 
        // phoneSpan.style.color="green"
        conformPhone.style.border = "2px solid green"
        e.preventDefault();

    }


})