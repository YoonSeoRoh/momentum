const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; 

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); //form�� ����
    const username = loginInput.value; //������ �̸��� ������ ����
    localStorage.setItem(USERNAME_KEY, username); //���ý��丮���� �̸� ����
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; //greeting�� �����̸� �߰�
    greeting.classList.remove(HIDDEN_CLASSNAME); //hidden�� ���� greeting�� display
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //���ý��丮���� ����� ���� ���� ���
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); //hidden�� ���� form�� display
    loginForm.addEventListener("submit", onLoginSubmit); //������ form�� �Է��Ͽ� ������ submit�� �� �ֵ���
} 
else{
    //���ý��丮���� ����� ���� �ִ� ���
    //hide the form and show the greetings
    paintGreetings(savedUsername);
}