
var toDoItems = []


var creador = document.querySelector('#createdBy')
creador.innerHTML = 'Application created by: Marcia'


function ToDo(description) {
 
  this.description = description
  this.complete = false
}

ToDo.prototype.completeToDo = function () {
  this.complete = true
}


function buildToDo(todo, index) {
 
  var toDoShell = document.createElement('div')
  toDoShell.className = 'toDoShell'

  var toDoText = document.createElement('span')
  toDoText.innerHTML = todo.description
  toDoText.id = index
  toDoText.addEventListener('click', completeToDo)

  if (todo.complete) {
    toDoText.className = 'completeText'
  }
  toDoShell.appendChild(toDoText)

  return toDoShell
}


function buildToDos(toDos) {

  var arrayDeToDos = toDos.map(buildToDo)
  return arrayDeToDos

}


function displayToDos() {

  var toDoContainer = document.getElementById('toDoContainer')
  toDoContainer.innerHTML = ''
  var result = buildToDos(toDoItems)

  result.forEach(function (todoHTML) {
    toDoContainer.appendChild(todoHTML)
  });
}

function addToDo() {

  const input = document.querySelector('#toDoInput')
  if (input.value) {
    let tarea1 = new ToDo(input.value)
    toDoItems.push(tarea1)
  }
  input.value = ''
  displayToDos()
}


document.querySelector('#addButton').addEventListener('click', addToDo)


function completeToDo(event) {
  
  const index = event.target.id;
 
  toDoItems[index].completeToDo()
  displayToDos()
}

document.querySelector('#select').onchange = function (e) {
  var selectedOption = e.target.value
  switch (selectedOption) {
    case 'yellow': 
    document.querySelector('body').id = 'bodyYellow' 
    document.querySelector('div').id = 'headerYellow' 
    document.getElementById("container").style.background = '#e4bb08d8'
    document.getElementById("addButton").style.background = '#f0e004' 
    break;
    case 'pink': 
    document.querySelector('body').id = 'bodyPink'
    document.querySelector('div').id = 'headerPink'
    document.getElementById("container").style.background = '#e40888d8'
    document.getElementById("addButton").style.background = '#fa03bcfd'
    break; 
    case 'orange':
    document.querySelector('body').id = 'bodyOrange'
    document.querySelector('div').id = 'headerOrange'
    document.getElementById("container").style.background = 'rgb(241, 111, 4)'
    document.getElementById("addButton").style.background = '#f84f00'
    break; 
    case 'green': 
    document.querySelector('body').id = 'bodyGreen' 
    document.querySelector('div').id = 'headerGreen'
    document.getElementById("container").style.background = 'rgb(94, 243, 8)'
    document.getElementById("addButton").style.background = '#34dd0a'
    break
    default: 
    document.querySelector('body').id = 'body' 
    document.querySelector('div').id = 'header'
    document.getElementById("container").style.background = '#e4bb08d8'
    document.getElementById("addButton").style.background = '#f0e004';
  }
}


displayToDos()

// ----------------------------  ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}
