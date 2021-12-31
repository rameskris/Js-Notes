const addForm=document.querySelector(".add")
const todos=document.querySelector(".todos")
const search=document.querySelector(".search input")

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

//filter Todo
const filterTodos=(term)=>{
    Array.from(todos.children)
    .filter((todo)=>!todo.textContent.includes(term))
    .forEach(todo=>{
        todo.classList.add('filtered')
    })
    Array.from(todos.children)
    .filter((todo)=>todo.textContent.includes(term))
    .forEach(todo=>{
        todo.classList.remove('filtered')
    })

}

//searching todo
search.addEventListener('keyup',()=>{
    const term=search.value.trim().toLowerCase()
    filterTodos(term)
})