let btn = document.getElementById("btn");
let name = document.getElementById("name");
let email = document.getElementById("Email");
let pad = document.getElementById("password");
let confirmPassword = document.getElementById("confirmpassword");
let DOB = document.getElementById("DOB");

let warningname = document.getElementById("warningname");
let warningEmail = document.getElementById("warningEmail");
let warningpassword = document.getElementById("warningpassword");
let warningconfirmpassword = document.getElementById("warningconfirmpassword");
let warningDOB = document.getElementById("warningDOB");
let emailValid = '@';

btn.addEventListener('click', () => {


    if (name.value === '' || email.value === '' || password.value === '' || confirmPassword.value === '' || DOB.value === '') {
        // alert('Fill in all the required fields');

     if (password.value !== confirmPassword.value) {
        warningconfirmpassword.innerHTML = 'Confirm Password do not match';
        warningconfirmpassword.style.color = 'red'

    } else {
        warningconfirmpassword.innerHTML = 'confirm password'
        warningconfirmpassword.style.color = 'white'
    }

    if (name.value === '') {
        warningname.innerHTML = 'Please Enter the name ⓘ'
        warningname.style.color = 'red'
        console.log("err")
    } else {
        warningname.innerHTML = 'Name'
        warningname.style.color = 'white'
    }

     if (email.value.match(emailValid)) {
        warningEmail.innerHTML = 'Email'
        warningEmail.style.color = 'white'
        
    } else {
        warningEmail.innerHTML = 'Please Enter the E-mail id ⓘ'
        warningEmail.style.color = 'red'
    } 
    // if (!isEmail(email)) {
    //     warningEmail.innerHTML = 'please Enter valid Email ⓘ';
    //     warningEmail.style.color = 'red'

    // } else {
    //     warningEmail.innerHTML = 'Email'
    //     warningEmail.style.color = 'white'
    // } 

    if (password.value === '') {
        warningpassword.innerHTML = 'Please Enter the password ⓘ'
        warningpassword.style.color = 'red'

    } else {
        warningpassword.innerHTML = 'Password'
        warningpassword.style.color = 'white'
    } 

    if (confirmPassword.value === '') {
        warningconfirmpassword.innerHTML = 'Please Enter the confirmpassword ⓘ'
        warningconfirmpassword.style.color = 'red'

    } else {
        warningconfirmpassword.innerHTML = 'confirm password'
        warningconfirmpassword.style.color = 'white'
    } 
    
    if (DOB.value === '') {
        warningDOB.innerHTML = 'Please Enter the DOB ⓘ';
        warningDOB.style.color = 'red';
    } else {
        warningDOB.innerHTML = 'DOB'; // Clear the warning
        warningDOB.style.color = 'white'; // Set color to white or any other desired color
    }
    

 }else {
        alert('Form submitted successfully');
    }
});