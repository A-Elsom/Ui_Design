var email = "user1@email.com";
var password = "1234";

function login(){
    let checkEmail = document.getElementById("userEmail_LInput");
    let checkPass = document.getElementById("userPass_LInput");
    alert(checkEmail.value);
    if(email === checkEmail.value && checkPass.value === password){
        document.getElementById("text").textContent = email;
        checkPass.style.borderColor = "transparent";
        checkEmail.style.borderColor = "transparent";
        //log in success
        document.getElementById("login_Container").style.visibility = "collapse";
        document.getElementById("loginSuccess").style.visibility = "visible";
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