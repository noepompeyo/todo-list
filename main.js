
let form = document.getElementById('form')


form.addEventListener('submit' , guardarTarea)



function guardarTarea(e) {
  let tarea = document.getElementById('input').value; console.log(tarea);
  
  const tasks = {
    id : Date.now(),
    newTask : tarea,
    completed : false,
  }
  if(localStorage.getItem('tasks') === null) {
    let task = [];
    task.push(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));

  } else {
    let task = JSON.parse(localStorage.getItem('tasks'));
    task.push(tasks);
    localStorage.setItem('tasks' , JSON.stringify(task))
  }  
  
  
  e.preventDefault();
}

