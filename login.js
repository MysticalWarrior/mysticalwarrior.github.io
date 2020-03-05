
let user;
let isAuth = false;
const CODE = 2;
function login() {
    //alert(user)//troubleshooting
    if(!user) {
        getUser();
    }
    else if(isAuth){
        window.open("welcome.html");
    }
    else if(!isAuth){
        verifyCode(prompt(`Please enter ${user}\'s code: `));
    }
}

function getUser(){
    user = prompt("Please enter username: ");
    document.getElementById('user').innerText = "User: " + user;
    document.getElementById('btnLogin').innerText= "Authorize";
}

function verifyCode(code){
    if (+code == CODE){
        isAuth = true;
        document.getElementById('authState').innerText = "authorized";
        document.getElementById('btnLogin').innerText= "Proceed to site";
    }
}