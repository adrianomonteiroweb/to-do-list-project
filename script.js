window.onload = function () {
  function waitCreateTasks() {
    let createTasks = document.getElementById('criar-tarefa');
    createTasks.addEventListener("click", addTasks, false);
  }
  waitCreateTasks();

  function addTasks() {
    let inputValue = document.getElementById('texto-tarefa');
    let tasksList = document.getElementById('lista-tarefas');
    let newTasks = document.createElement('li');
    newTasks.textContent=inputValue.value;
    tasksList.appendChild(newTasks);
    inputValue.value="";
  }

  function waitItemSelect() {
    let itemSelect = document.getElementById('lista-tarefas');
    itemSelect.addEventListener("click", function(i){markItem(i.target.id)}, false)
  }
  waitItemSelect();

  function markItem(idItem) {

  }
}