const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const loginBtn = document.querySelector("#login-form button")
const h1 = document.querySelector("#greeting")
const savedUsername = localStorage.getItem("username")


function showH1 (){
    const username = savedUsername;
    h1.innerText = `Hello ${username}`
    h1.classList.remove("hidden")
}
function onLoginSubmit(){
    event.preventDefault();
    loginForm.classList.add("hidden")
    const username = loginInput.value;
    localStorage.setItem("username",username);
    showH1()
}
loginForm.addEventListener("submit", onLoginSubmit)

if (savedUsername === null ){
    loginForm.classList.remove("hidden")
}else {
    showH1()
}