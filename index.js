//adding task
const input = document.querySelector('input[type="text"]');
const submit = document.querySelector('input[type="submit"]');
const list = document.querySelector("ul");
let counter = 0;

function newTask() {
  if (input.value === "") {
    alert("You must enter a value");
  } else {
    list.innerHTML += `<li id="task${counter}"> ${input.value} </li>`;
    window.localStorage.setItem(`task${counter}`, `${input.value}`);
    input.value = "";
    counter++;
  }
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  newTask();
});
//removing task
let firstClick = [];

list.addEventListener("click", (e) => {
  const activeLi = document.getElementById(`${e.target.id}`);
  if (firstClick.includes(e.target.id)) {
    activeLi.remove();
    window.localStorage.removeItem(`${e.target.id}`);
  } else {
    activeLi.classList.add("active");
    firstClick.push(`${e.target.id}`);
  }
});
//get local storage
function getLocalStorage() {
  let i = 0,
    storedList = window.localStorage.getItem(`task${i}`);
  while (storedList) {
    list.innerHTML += `<li id="task${i}"> ${storedList} </li>`;
    i++;
    storedList = window.localStorage.getItem(`task${i}`);
  }
}

window.addEventListener("load", getLocalStorage());
