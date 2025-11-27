const inputTask = document.getElementById('input-task');
const listContainer = document.getElementById('list-container');
const addBtn = document.getElementById('addBtn');

//add task function
const addTask = () => {
    //alerts when you don't input anything
    if (inputTask.value === '') {
        alert("You must add a task!");
    } else {
        let li = document.createElement("li");//creates an element list
        li.innerHTML = inputTask.value;//sets the innerHTML to value of input task
        listContainer.appendChild(li);//adds to the parent
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputTask.value = '';//empty for the next
    saveData();//saves the data
}

addBtn.addEventListener("click", addTask);

//edit task function
const editTask = (e) => {
    //takes an event then looks for an element
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();//remove an element
        saveData();
    }
};

listContainer.addEventListener("click", editTask);

//sets up a local storage for the browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

//returns the saved data when loaded
showTask();