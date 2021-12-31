const addForm=document.querySelector(".add")
const todos=document.querySelector(".todos")

generateTodos=todo=>{
    todos.innerHTML+=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`
}

addForm.addEventListener('submit',e=>{
    e.preventDefault()
    //trim the sapces
    const todo=addForm.add.value.trim();
    if(todo.length){
        generateTodos(todo)
        addForm.reset()
        

    }   

})
//delete todos
todos.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})