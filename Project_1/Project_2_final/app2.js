const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loadEventListeners();
function loadEventListeners(){
//DOM load event
document.addEventListener("DOMContentLoaded", getTasks);

//Add Task event    
form.addEventListener("submit",addTask);

//Remove task event 
taskList.addEventListener("click",removeTask);

//Clear tasks
clearBtn.addEventListener("click", clearTask);

//Filter task event
filter.addEventListener("keyup",filterTask);
}

//Get tasks from LocalStorage
function getTasks(){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks=[];

    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task){
        //create a li
        const li = document.createElement("li");
        li.className = "collection-item";
        li.appendChild(document.createTextNode(task));

        //create a "x" icon on the left
        const link = document.createElement("a");
        link.className = "delete-item secondary-content";
        link.innerHTML = '<i class="fa fa-remove"></i>';

        //append "x" to the li
        li.appendChild(link);
        //append the entire task to the li
        taskList.appendChild(li);


    })
}


//Alert validation
function addTask(e){
if(taskInput.value === ""){
alert("Input required");

}

//create a li
const li = document.createElement("li");
li.className = "collection-item";
li.appendChild(document.createTextNode(taskInput.value));

//create a "x" icon on the left
const link = document.createElement("a");
link.className = "delete-item secondary-content";
link.innerHTML = '<i class="fa fa-remove"></i>';

//append "x" to the li
li.appendChild(link);
//append the entire task to the li
taskList.appendChild(li);
//Store the value entered
storeTask(taskInput.value);

taskInput.value = "";
e.preventDefault();
}

//store value
function storeTask(task){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));

    }

    tasks.push(task);

    localStorage.setItem("tasks",JSON.stringify(tasks));

}


//Remove the task
function removeTask(e){
    if(e.target.parentElement.classList.contains("delete-item")){
        if (confirm("Are you sure?")){
            e.target.parentElement.parentElement.remove();

            //Remove from LocalStorage
            removeLocal(e.target.parentElement.parentElement);
        }

    }   

}

//Remove from the task list
function removeLocal(taskItem){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


//Clear tasks
function clearTask(e){
    //taskList.innerHTML = "";
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

   //Clear from local storage
    clearStorage();  
}

//clear from clear button
function clearStorage(){
    localStorage.clear();
}




//Filter Task
function filterTask(e){
    const text =  e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = "block";
        }else {
            task.style.display = "none";
        }
     })
}
