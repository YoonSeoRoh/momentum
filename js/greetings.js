const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); //form을 숨김
  const username = loginInput.value; //유저의 이름을 변수로 저장
  localStorage.setItem(USERNAME_KEY, username); //로컬스토리지에 이름 저장
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; //greeting에 유저이름 추가
  greeting.classList.remove(HIDDEN_CLASSNAME); //hidden을 지워 greeting을 display
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //로컬스토리지에 저장된 값이 없는 경우
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME); //hidden을 지워 form을 display
  loginForm.addEventListener("submit", onLoginSubmit); //유저가 form에 입력하여 정보를 submit할 수 있도록
} else {
  //로컬스토리지에 저장된 값이 있는 경우
  //hide the form and show the greetings
  paintGreetings(savedUsername);
}
