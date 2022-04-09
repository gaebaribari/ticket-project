const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const trashBtn = document.querySelector(".trashBtn")
const ticket = document.querySelector("#wrap")
const cinema = document.querySelector("#cinema")
const h1 = document.querySelector("#greeting")

function onLoginSubmit(){
    event.preventDefault();
    loginForm.classList.add("hidden")
    const username = loginInput.value;
    localStorage.setItem("username",username);
    showH1(username);
}

loginForm.addEventListener("submit", onLoginSubmit)

function showH1 (username){
    h1.innerText = `🤡Welcome
    ${username}`;
    trashBtn.classList.remove("hidden")
    cinema.classList.remove("hidden")
    ticket.classList.add("rotate")
    h1.classList.remove("hidden")
}

const savedUsername = localStorage.getItem("username")
if (savedUsername === null ){
    loginForm.classList.remove("hidden")
}else {
    showH1(savedUsername);
}

trashBtn.addEventListener("click",()=>{
    trashBtn.classList.add("hidden")
    cinema.classList.add("hidden")
    ticket.classList.remove("rotate")
    h1.classList.add("hidden")
    localStorage.removeItem("username");
    loginForm.classList.remove("hidden");
})
