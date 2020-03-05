
let user;
let isAuth = false;
const CODES = [0,1,2,3,4,5,6,7,8,9]
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
    /*//this code works when there is one code that works 
    (so it is kept for later when there will be a single valid code for the user that is accessed at the call of the script.)
    if (+code == CODE){
        isAuth = true;
        document.getElementById('authState').innerText = "authorized";
        document.getElementById('btnLogin').innerText= "Proceed to site";
    }*/
    for(let i=0; i<CODES.length;i++){
        if(+code == CODES[i]){ //the single "+" in front of code converts it to a number, its called a unary operator.
            isAuth = true;
            document.getElementById('authState').innerText = "authorized";
            document.getElementById('btnLogin').innerText= "Proceed to site";
        }
    }
}