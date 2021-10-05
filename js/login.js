
// LOGIN & REGITER 
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

const name = document.getElementById("name");
const pass = document.getElementById("password");
const email = document.getElementById("email");


const btnIn = document.getElementById("btnIn");
const btnUp = document.getElementById("btnUp");

const linkToSignUp = document.getElementById("signUp");

const formLogin = document.getElementById("formLogin");

const messageLog = document.getElementById("messageLog");
//const logOut = document.getElementById("logOut")


/// LOGICA

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
