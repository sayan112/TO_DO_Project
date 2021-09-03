// selector
const todoInput = document.querySelector(".todo-input") ;
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const   filterOption = document.querySelector(".filter-todo");



// Event Listner 
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deletecheck);
filterOption.addEventListener("click",filterTodo);


// shift + alt + down(arrow)




function addTodo(event) {
  // Prevent form from submitting 
  event.preventDefault();
  

//   Todo DIV
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

//  create LI

const newTodo= document.createElement('li');
// enter todo input 
newTodo.innerText=todoInput.value;


newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);


//  add todo to local storage 
saveLocalTodos(todoInput.value);
// 
//  newTodo.classList.add("todo-item");
//   todoDiv.appendChild(newTodo);
//    todoInput.value="";


// check mark button 

const completedButton = document.createElement("button");
completedButton.innerHTML='<i class= "fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);



// check trash button 

const trashButton = document.createElement("button");
trashButton.innerHTML='<i class= "fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);




// append to list 

todoList.appendChild(todoDiv);

// clear Todo Input value 
todoInput.value= "";




}







// delete Todo 
function deletecheck(e){
    const item = e.target;
    // delete todo 
    if(item.classList[0] === "trash-btn")
    {
       const todo = item.parentElement;

    //    Animation
       todo.classList.add("fall");
    //    todo.remove();       this is not the right way to remove , bcz we are just turn the opacity 0 , but still elem is there
    // so , we create a function
todo.addEventListener('transitionend',function()
{
    todo.remove();
});
    }

// check mark 
    if(item.classList[0]==="complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
   
    }  
    
}

function filterTodo(e) {
  const todos = document.querySelectorAll('.todo');
  // i finr childrens with selector alll
  todos.forEach((todo) => {
    switch(e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if(todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if(!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  })

}



function saveLocalTodos(todo)
{
  // check - Hey do i already have any todo in there :)   ?
 
   let todos;
    if(localStorage.getItem("todos")== null)
    {
       todos=[];
    }
     else{
        todos= JSON.parse(localStorage.getItem("todos"));

     }

todos.push(todo);
localStorage.setItem("todos",JSON.stringify(todos));


}



//  after refreshing it called :)


 function getTodos() {
   let todos;

       if(localStorage.getItem("todos")== null)
    {
       todos=[];
    }
     else{
        todos= JSON.parse(localStorage.getItem("todos"));

     }
todos.forEach(function (todo) {

//   Todo DIV
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

//  create LI

const newTodo= document.createElement('li');
// enter todo input 
newTodo.innerText=todo;


newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
// 
//  newTodo.classList.add("todo-item");
//   todoDiv.appendChild(newTodo);
//    todoInput.value="";


// check mark button 

const completedButton = document.createElement("button");
completedButton.innerHTML='<i class= "fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);



// check trash button 

const trashButton = document.createElement("button");
trashButton.innerHTML='<i class= "fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);




// append to list 

todoList.appendChild(todoDiv);
  
})

 }



//   delete local storage todo
function removeLocalstorage(todo) {
  let todos;
  if(localStorage.getItem("todos")== null)
  {
     todos=[];
  }
   else{
      todos= JSON.parse(localStorage.getItem("todos"));

   }
   const todoIndex = todo.children[0].innerText;
   localStorage.setItem("todos",JSON.stringify(todos));

}




