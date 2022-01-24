const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  //toDos array의 내용을 localStorage에 넣는 역할
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos(); //업데이트
}

function paintToDo(newTodo) {
  //todo를 그리는 역할
  //li 안에 span
  //span 옆에 삭제 버튼
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  //버튼에 이벤트 리스너 추가
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //li는 span이라는 child를 갖게 됨
  li.appendChild(button); //li는 button이라는 child를 갖게 됨
  //li를 todolist에 append
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  //사용자가 입력한 todo를 받는 역할
  event.preventDefault();
  const newTodo = toDoInput.value; //값을 저장
  toDoInput.value = ""; //저장 후 공백으로
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  //아이디와 텍스트가 포함된 객체를 push
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//로컬 스토리지로부터 todo들을 배열로 받아오기
const savedToDos = localStorage.getItem(TODOS_KEY);

//로컬 스토리지에 todo가 없는 경우를 처리
if (savedToDos) {
  //있는 경우
  //문자열을 객체로 변환
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
