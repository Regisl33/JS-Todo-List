const form = document.querySelector("form");
//Stokage local
function storeList() {
  window.localStorage.todolist = list.innerHTML;
}
function getTodos() {
  if (window.localStorage.todolist) {
    list.innerHTML = window.localStorage.todolist;
  } else {
    list.innerHTML = "Cliquer sur un todo pour le supprimer";
  }
}
window.addEventListener("load", getTodos());
//Add element
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});
//Remove element
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});
