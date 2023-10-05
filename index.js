//Variables and constants
const input = document.querySelector('input[type="text"]');
const submit = document.querySelector('input[type="submit"]');
const list = document.querySelector("ul");
let counter = 0;
let storedValue = [];
let firstClick = [];
let index;
let deletedValue;
let value;
let storedList;
//adding task
function newTask() {
  if (input.value === "") {
    alert("You must enter a value");
  } else {
    list.innerHTML += `<li id="task${counter}"> ${input.value} </li>`;
    storedValue.push(input.value);
    localStorage.setItem(`tasks`, JSON.stringify(storedValue));
    input.value = "";
    counter++;
  }
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  newTask();
});
//removing task
list.addEventListener("click", (e) => {
  const activeLi = document.getElementById(`${e.target.id}`);
  if (firstClick.includes(e.target.id)) {
    index = firstClick.indexOf(e.target.id);
    firstClick.splice(index, 1);
    deletedValue = activeLi.innerHTML.trim();
    value = storedValue.indexOf(`${deletedValue}`);
    storedValue.splice(value, 1);
    localStorage.setItem(`tasks`, JSON.stringify(storedValue));
    activeLi.remove();
  } else {
    activeLi.classList.add("active");
    firstClick.push(`${e.target.id}`);
  }
});
//Map local storage
function getLocalStorage() {
  storedList = JSON.parse(localStorage.getItem("tasks"));
  storedList.map((task) => {
    list.innerHTML += `<li id="task${counter}"> ${task} </li>`;
    storedValue.push(task);
    counter++;
  });
}
window.addEventListener("load", getLocalStorage());
