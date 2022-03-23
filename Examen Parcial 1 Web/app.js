/*console.log('Listas')

const formulario = document.getElementById('formulario')
const input = document.getElementById('input')
const listaTarea = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()

let tareas = {}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('tareas')) {
        tareas = JSON.parse(localStorage.getItem('tareas'))
    }
    pintarTareas()
})

listaTarea.addEventListener('click', e => {
    btnAccion(e)
})

// console.log(Date.now())

formulario.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(e.target[0].value)
    // console.log(e.target.querySelector('input').value)
    // console.log(input.value)
    setTarea(e)
})

const setTarea = e => {
    if (input.value.trim() === '') {
        console.log('está vacio')
        return
    } 
    const tarea = {
        id: Date.now(),
        texto: input.value,
        estado: false
    }
    tareas[tarea.id] = tarea
    // console.log(tareas)
    formulario.reset()
    input.focus()
    pintarTareas()
}

const pintarTareas = () => {

    localStorage.setItem('tareas', JSON.stringify(tareas))

    if (Object.values(tareas).length === 0) {
        listaTarea.innerHTML = `
        <div class="alert alert-dark text-center">
            No hay tareas
        </div>
        `
        return
    }

    listaTarea.innerHTML = ''
    Object.values(tareas).forEach(tarea => {
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto

        if (tarea.estado) {
           // clone.querySelector('.alert').classList.replace('alert-warning', 'alert-primary')
            //clone.querySelectorAll('.fas')[0].classList.replace('fa-check-circle', 'fa-undo-alt')
            clone.querySelector('p').style.textDecoration = 'line-through'
        }

        clone.querySelectorAll('.fas')[0].dataset.id = tarea.id
        clone.querySelectorAll('.fas')[1].dataset.id = tarea.id
        fragment.appendChild(clone)
    })
    listaTarea.appendChild(fragment)
}

const btnAccion = e => {
     console.log(e.target.classList.contains('fa-check-circle'))
    if (e.target.classList.contains('fa-check-circle')) {
         console.log(e.target.dataset.id)
        tareas[e.target.dataset.id].estado = true
        pintarTareas()
         console.log(tareas)
    }

    if (e.target.classList.contains('fa-minus-circle')) {
        delete tareas[e.target.dataset.id]
        pintarTareas()
         console.log(tareas)
    }

    

    

    e.stopPropagation()
*/


// Aqui agregue el js de funcion on click 

    var ejemplo1 = new Vue({
        el: '#ejemplo1',
        data: {
          counter: 0
        }
      })
      <hr>
// aqui esta la funcion v-for
      var ejemplo2 = new Vue({
        el: '#ejemplo2',
        data: {
          items: [
            { mensaje : 'Atras' },
            { mensaje : 'Adelante' }
          ]
        }
      })
}