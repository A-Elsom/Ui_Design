var email = "user1@email.com";
var password = "1234";

function login(){
    let checkEmail = document.getElementById("userEmail_LInput");
    let checkPass = document.getElementById("userPass_LInput");
    alert(checkEmail.value);
    if(email === checkEmail.value && checkPass.value === password){
        document.getElementById("text").textContent = checkEmail.value;
        checkPass.style.borderColor = "transparent";
        checkEmail.style.borderColor = "transparent";
        //log in success
        document.getElementById("login_Container").style.visibility = "collapse";
        document.getElementById("loginSuccess").style.visibility = "visible";
        document.getElementById("accountCreated").style.visibility = "hidden";
        sessionStorage.setItem('currentUser', checkEmail)
    }else{
        if(!(email === checkEmail.value)){
            checkEmail.style.borderColor = "red";
        }else{
            checkEmail.style.borderColor = "transparent";
        }
        if(!(password === checkPass.value)){
            checkPass.style.borderColor = "red";
        }else{
            checkPass.style.borderColor = "transparent";
        }
    }
}

function showSignUp(){
    document.getElementById("login_Container").style.visibility = "collapse";
    document.getElementById("signup_Container").style.visibility = "visible";
    document.getElementById("signup_Container").style.display = "grid";
}

function showLogin(){
    document.getElementById("signup_Container").style.visibility = "collapse";
    document.getElementById("login_Container").style.visibility = "visible";
    document.getElementById("login_Container").style.display = "grid";
}

function signUp(){
    var newEmail = document.getElementById("userEmail_SInput");
    var newPassword = document.getElementById("userPass_SInput"); 
    var newPassword1 = document.getElementById("userPass_SInput1");
    var isValid = true;

    if(newPassword.value === ""){
        
        newPassword.style.borderColor = "red";
        document.getElementById("userPassError").textContent = "Password Is Required";
        document.getElementById("userPassError").style.visibility = "visible";
        isValid = false;
    }else{
        
        newPassword.style.borderColor = "transparent";
        document.getElementById("userPassError").textContent = "";
        document.getElementById("userPassError").style.visibility = "collapse";
    }
    
    if(newPassword1.value === ""){
        newPassword1.style.borderColor = "red";
        document.getElementById("userPassError1").textContent = "Password Is Required";
        document.getElementById("userPassError1").style.visibility = "visible";
        isValid = false;
    }else{
        newPassword1.style.borderColor = "transparent";
        document.getElementById("userPassError1").textContent = "";
        document.getElementById("userPassError1").style.visibility = "collapse";
    }
    if(newPassword.value != newPassword1.value && newPassword.value != ""){
        newPassword.style.borderColor = "red";
        newPassword1.style.borderColor = "red";
        document.getElementById("userPassError").textContent = "Password does not match";
        document.getElementById("userPassError").style.visibility = "visible";
        document.getElementById("userPassError1").textContent = "Password does not match";
        document.getElementById("userPassError1").style.visibility = "visible";
        isValid = false;
    }else if(newPassword.value != ""){
        
        newPassword.style.borderColor = "transparent";
        newPassword.style.borderColor = "transparent";
        document.getElementById("userPassError").textContent = "";
        document.getElementById("userPassError1").textContent = "";
        document.getElementById("userPassError1").style.visibility = "collapse";
        document.getElementById("userPassError").style.visibility = "collapse";
    }

    if(newEmail.value === email){
        newEmail.style.borderColor = "red";
        document.getElementById("userEmailError").style.visibility = "visible";
        document.getElementById("userEmailError").textContent = "Email Already In Use";
        isValid = false;
    }else{
        newEmail.style.borderColor = "transparent";
        document.getElementById("userEmailError").style.visibility = "collapse";
    }

    if(isValid === true){
        document.getElementById("text").textContent = newEmail.value;
        //log in success
        document.getElementById("signup_Container").style.visibility = "collapse";
        document.getElementById("loginSuccess").style.visibility = "visible";
        document.getElementById("accountCreated").style.visibility = "visible";
        sessionStorage.setItem('currentUser', newEmail.value);
    }
}
