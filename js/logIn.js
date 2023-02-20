const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.prevenDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
}


function paintGreetings(username) {
  // h1태그에 인사말을 넣는다.
  // h1태그의 hidden 속성을 지운다.
  greeting.innerText = `Hello ${username}`;
  document.querySelector('h1').classList.remove('hidden');
}

// const savedUsername = 로컬스토리지에서 USERNAME_KEY를 읽어요;
const savedUsername = localStorage.getItem('username', 'smith');
console.log(savedUsername);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}