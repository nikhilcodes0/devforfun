const list_container = document.getElementById("task-list");
const ToDo = document.getElementsByTagName("li");
const modal = document.getElementById("modal");
const app = document.getElementById("app");
const task_input = document.getElementById("task-input");
const err = document.getElementById("error-msg");


list_container.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    let div = e.target.parentNode;
    div.remove();
    saveData();
  }
});

function openModal() {
    modal.classList.toggle("show");
    app.classList.toggle("blur");
    
}

function closeModal() {
    modal.classList.toggle("show");
    app.classList.toggle("blur");
}

function addTask() {
    const trimmedInput = task_input.value.trim();
    
    if(trimmedInput === "") {
        let interval = setInterval(() => {
                err.style.display = "block";
            }, 100);
        setTimeout(() => {
            clearInterval(interval);
            err.style.display = "none";
        }, 4000);
        // clearInterval(interval);
        // err.style.display = "block";
    }
    else {
        let task = document.createElement("li");
        task.innerHTML = `<p>${task_input.value}</p>`;
        list_container.appendChild(task);
        let span = document.createElement("span");
        span.className = "f-task";
        span.innerHTML = "\u00D7";
        task.appendChild(span);
        task_input.value = ""; 
        closeModal();
    }
}

task_input.addEventListener("keyup", function(e) {
    e.preventDefault();
    if(e.key === 'Enter') {
        addTask();
        // saveData();
    }
    saveData();
});


function saveData() {
    localStorage.setItem("data", list_container.innerHTML);
    // console.log(localStorage.getItem("data"));
}

function showdata() {
    if(localStorage.getItem("data") === "") {
        console.log("empty tasks");
        return;
    }
    else {
        list_container.innerHTML = localStorage.getItem("data");
    }
}
showdata();
