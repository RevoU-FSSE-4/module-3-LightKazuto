// Place your code here
// Add any additional code necessary to fulfill the requirements of the assignment

const myTaskList: HTMLElement | null = document.getElementById("taskList");
const myTaskInput: HTMLElement | null = document.getElementById("newTask");
const myTaskBtn: HTMLElement | null = document.getElementById("addTaskBtn");


interface TaskInput {
    value: any;
}

interface PopupMessgae{
    errorText: String,
    errorType: number,
    approveText: String,
}

function addingTask (myTaskInput: TaskInput | any): void {
    const taskText: string = myTaskInput.value.trim();
    const myTaskList: HTMLElement | null = document.getElementById("taskList"); 
    
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        if (myTaskList) myTaskList.appendChild(li);
        myTaskInput.value = "";
    } else {
        type DisplayText = Omit <PopupMessgae, "approveText" | "errorType">
        const displayingText: DisplayText = {
            errorText: "Please Enter Task!!"
        };
    }
}


if (myTaskBtn) {
    myTaskBtn.addEventListener("click", function() {
        const taskInput: TaskInput = { value: myTaskInput };
        addingTask(taskInput);
    });
}

if (myTaskInput) {
    myTaskInput.addEventListener("keypress", function(event: KeyboardEvent): void {
        if (event.key === "Enter") {
            const taskInput: TaskInput = { value: myTaskInput };
            addingTask(taskInput);
        }
    });
}


function fetching(fetch:any): void {
    fetch('https://module3-api-is2m.onrender.com/random-todos') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then((data: string[]) => {
            data.forEach(taskText => {
                const li: HTMLLIElement = document.createElement("li");
                li.textContent = taskText;
                if (taskList) taskList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}




// 2451 reduplicate varibale
// 2393 dulicate function

