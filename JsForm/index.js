const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

// add event

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validate()
})

const sendData = (sRate,count) =>{
    if(sRate === count){
        alert('registration successFull');
        swal("Welcome!", "Registration Succesfull", "success");
        location.href = `demo.html?username=${'welcome'}`
    }

}

// for final validate

 const successMsg = () => {
     let formCon = document.getElementsByClassName('form-control');
     var count = formCon.length-1;
     for(var i = 0; i<formCon.length; i++){
         if(formCon[i].className === "form-control success"){
             var sRate = 0 + i;
            //  console.log(sRate)
             sendData(sRate, count);
         }else{
             return false;
         }
     }
 }

 // more email validate
const isEmail = (emailVal) =>{
   var atSymbol = emailVal.indexOf("@");
   if(atSymbol< 1) return false;
   var dot = emailVal.lastIndexOf('.');
   if(dot <= atSymbol + 3) return false;
   if(dot === emailVal.length-1) return false;
   return true;
}


// define the validate function

const validate = () =>{

    // this will trim the white space of before and after word
 
const usernameVal = username.value.trim()
const emailVal = email.value.trim()
const phoneVal = phone.value.trim()
const passwordVal = password.value.trim()
const cpasswordVal = cpassword.value.trim()

// validate usernam

if(usernameVal === ""){
    setErrorMsg(username, 'username cannot be blank');
} else if(usernameVal.length <= 2){
    setErrorMsg(username, 'username min 3 char');
} else{
    setSuccessMsg(username)
}

// validate for email

if(emailVal === ""){
    setErrorMsg(email, 'Email cannot be blank');
}else if(!isEmail(emailVal)){
    setErrorMsg(email, 'Not a valid email');
} else{
    setSuccessMsg(email);
}

if(phoneVal === ""){
    setErrorMsg(phone, 'Phone No cannot be blank');
}else if(phoneVal.length<10) {
    setErrorMsg(phone, 'Phone No Cannot be less then 10 digit');
}else if (phoneVal.length>10){
    setErrorMsg(phone, 'Phone No Cannot be grater then 10 digit');
}
 else{
    setSuccessMsg(phone);
}

if(passwordVal === ""){
    setErrorMsg(password, 'Please set the password');
}else if(passwordVal.length<8){
    setErrorMsg(password, 'Password should be 8 char long');
} else{
    setSuccessMsg(password);
}

if(cpasswordVal != passwordVal){
    setErrorMsg(cpassword, 'Please match the password');

 }else if(cpasswordVal.length != passwordVal.length){
     setErrorMsg(cpassword, 'Please check the above password');
} else{
    setSuccessMsg(cpassword);
}

successMsg();

}

function setErrorMsg(input, errorMsg){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errorMsg;
  

}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}
