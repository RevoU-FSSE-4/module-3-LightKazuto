// Place your code here
// Add any additional code necessary to fulfill the requirements of the assignment
const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTask");
const addTaskBtn = document.getElementById("addTaskBtn");


function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        newTaskInput.value = "";
    } else {a
        alert("Please enter a task!");
    }
}


addTaskBtn.addEventListener("click", addTask);


newTaskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function fetchAndDisplayTasks() {
    fetch('https://module3-api-is2m.onrender.com/random-todos') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            data.forEach(taskText => {
                const li = document.createElement("li");
                li.textContent = taskText;
                taskList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

fetchAndDisplayTasks();
