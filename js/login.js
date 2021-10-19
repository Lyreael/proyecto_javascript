
// LOGIN & REGITER animation
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});
// =========================== //



// OBJETS

class User {
	constructor(name, pass, type) {
		this.nombre = name;
		this.pass = pass;
		this.type = type;
	}

}


    const users = JSON.parse(localStorage.getItem("users")) || [];
    const cart = [];




// DOM
//login
const pass = document.getElementById("password");
const email = document.getElementById("email");
//register
const nameReg = document.getElementById("nameReg");
const passReg = document.getElementById("passReg");
const emailReg = document.getElementById("emailReg");
//botones
const btnIn = document.getElementById("btnIn");
const btnUp = document.getElementById("btnUp");
//forms
const formLogin = document.getElementById("formLogin");
const formReg = document.getElementById("formReg");
//validation
const validation = document.getElementById("messageLog");
//const logOut = document.getElementById("logOut")


/// LOGICA

formReg.addEventListener("submit", e=>{ 
	e.preventDefault();
	let messageLog = "";
	let inMessage = false;
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	validation.innerHTML = "";
	if(!nameReg.value || nameReg.value.lenght < 6){

		inMessage = true;
	}
	if(!regexEmail.test(emailReg.value)){
		inMessage = true;
	}
	if(!passReg.value || passReg.value.lenght < 8){
		inMessage = true;
	}
	if(inMessage){
		validation.innerHTML = messageLog;
		swal("Oh oh!", "Los datos ingresados no son válidos!", "error");
	}
	else{
		const userData = {
			name : nameReg.value,
			pass : passReg.value,
			email : emailReg.value,
		};
		window.localStorage.setItem("userData", JSON.stringify(userData));
		swal("Excelente!", "Usuario regristrado con exito!", "success");
	}
})



/*
const newUser = () => {

	let name = name.value;
	let pass = inputPass.value;
	let type;

    if (name.value.length < 4) {
		messageLog.innerHTML = "Su nombre de usuario debe tener más de 4 caracteres"


		if (inputPass.length < 8) {
			messageLog.innerHTML += "<br>Su contraseña debe tener más de 8 caracteres"
		}

	} else if (inputPass.value.length < 8) {

		messageLog.innerHTML = "Su contraseña debe tener más de 8 caracteres"


	} else {
    
		const user = new newUser(name, pass, type)

		users.push(user)
		localStorage.setItem("users", JSON.stringify(users))
		name.value = "";
		inputPass.value = "";
		messageLog.innerHTML = "Usuario registrado con éxito"
		btnIn.style.display = "block"
		btnUp.style.display = "none"
		linkToSignUp.style.display = "block"



	}

}
*/

//// jQuery
// input color
$(function(){
	$("input").focus(function(){
		$(this).css("background-color", "#ffaead");
	});
	$("input").blur(function(){
		$(this).css("background-color", "#ffe4e3");
	});
});

/*// double click
$(function(){
	$("h1").dblclick(function(){
		$(this).text("¡¡Únete!!");
		$(this).css("font-size", "350%");
	});
});*/

