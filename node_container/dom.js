var lista = document.getElementById('lista');

fetch('http://localhost:3000/tareas')
  .then(function(response) { return response.json() })
  .then(function(tareas) {
    tareas.map(function(tarea) {
      var li = document.createElement('LI');
      li.innerHTML = tarea.descripcion;
      
      lista.appendChild(li);
    });
  });