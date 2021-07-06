const input = document.querySelector("input");
const btn = document.querySelector(".button");
const list = document.querySelector('.todo-list');
const warning = document.querySelector('.warning');
let deleteList = [];
let todoArray = [];

let todos = [
    {
        title: "Do THA 12",
        completed: false
    },
    {
        title: "Do THA 13",
        completed: false
    }
];

//updates the object list
function updateList(){
    const val = input.value;
    todos.push({title:val,completed:false});
    localStorage.setItem("todos", JSON.stringify(todos));
}
localStorage.setItem("todos", JSON.stringify(todos));
todos = JSON.parse(localStorage.getItem("todos"));

// This function will load the list if there is some todo to do from localstaorage
function addToDo(){
    todos.map((todo,number)=>{
        const deleteTodo = document.createElement('span');
        const ele = document.createElement("div");
        const completeOrNot = document.createElement('span');
        deleteTodo.innerHTML = "X";
        deleteTodo.className = "delete-todo";

        completeOrNot.innerHTML = todo.title;
        ele.appendChild(completeOrNot);
        todoArray.push(completeOrNot);

        ele.className = "todo-list-child";
        list.appendChild(ele);
        ele.appendChild(deleteTodo);
        deleteList.push(deleteTodo);
    })
}

//toggle the todo list if the task is completed or not
function todoComplete(){
    todoArray.forEach((current)=>{
        current.addEventListener('click',function (){
            current.classList.toggle('todo-complete');
        })
    })
}

//delete the todo if the task is done
function del(){
    deleteList.forEach(function (remove){
        remove.addEventListener('click',function (){
            const closestElement =  this.closest(".todo-list-child");
            closestElement.style.display = "none";
            // console.log(closestElement.childNodes[0]);
        })
    })
}

btn.addEventListener("click", updateList);
btn.addEventListener("click",function (){
    if(input.value != ""){
        console.log("lets go");
        const deleteTodo = document.createElement('span');
        const ele = document.createElement("div");
        const completeOrNot = document.createElement('span');
        deleteTodo.innerHTML = "X";
        deleteTodo.className = "delete-todo";

        completeOrNot.innerHTML = input.value;
        ele.appendChild(completeOrNot);
        todoArray.push(completeOrNot);

        ele.className = "todo-list-child";
        list.appendChild(ele);
        todoComplete();
        ele.appendChild(deleteTodo);
        deleteList.push(deleteTodo);
        input.value = "";
        del();
    }else{
        alert("You Must Fill out the Field");
    }
    
});

// *********************************************************************************
//load all the functions
function loadFunction(){
    addToDo();
    todoComplete();
    del();
}
loadFunction();