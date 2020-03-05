    let user;
	let isAuth = false;
    function login() 
    {
		//alert(user)//troubleshooting
		if(!user) 
		{
			user = prompt("Please enter username: ");
			document.getElementById('user').innerText = "User: " + user;
			document.getElementById('btnLogin').innerText= "Authorize";
		}
		else if(isAuth)
		{
			window.open("welcome.html");
			//this.window.close();
		}
		else if(!isAuth && (prompt(`Please enter ${user}\'s code: `) == 2))
		{
			isAuth = true;
			document.getElementById('authState').innerText = "authorized";
			document.getElementById('btnLogin').innerText= "Proceed to site";
		}
	}