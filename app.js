// Place your code here
// Add any additional code necessary to fulfill the requirements of the assignment
let taskData = []
const getTaskData = async () => {
    const response = await fetch(
        "https://module3-api-is2m.onrender.com/random-todos",
    );
    const data = await response.json();
    taskData = data
    console.log("task data", data);

    if (data.length > 0) {
        taskListComponent(data);
    }
};

const addTaskData = async () => {
    const newTaskInput = document.getElementById("newTask").value.trim();
    if (newTaskInput) { 
        taskData.push(newTaskInput); 
        taskList.innerHTML += `<li>${newTaskInput}</li>`; 
        document.getElementById("newTask").value = "";
    } else {
        alert("Please enter a task!");
    }
};

const onClickTask = (index) => {
console.log('TASK CLICKED');
const clicedTask = document.getElementById(`list-${index}`)
clicedTask.classList.add("done")
}

const taskListComponent = (taskData) => {
    const taskList = document.getElementById("taskList");
    console.log("taskList", taskList);
    let list = ''
    if (taskData.length > 0) {
        for (let i = 0; i < taskData.length; i++) {
            const element = taskData[i];
            console.log('element', element);
            list = list + `<li id='list-${i}' class='task'>${element}</li>`
        }
        console.log('list', list)
        taskList.innerHTML = list

        for (let i = 0; i < taskData.length; i++) {
            console.log('addEventListener with id list-', i);
            document.getElementById(`list-${i}`).addEventListener("click",() => onClickTask(i));
        }
    }
    else taskList.innerHTML = `<li>There is no task</li>`
};
getTaskData();

document.getElementById("addTaskBtn").addEventListener("click", addTaskData);

