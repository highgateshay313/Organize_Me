
const tasks = document.querySelector(".task")
let addTask = document.querySelector(".add_task")
const newtask = document.getElementById("newTask")


function addTasks() {
    const divs = document.createElement("div");
    let para = document.createElement("p")
    const input = document.getElementById("inputText")
    para.textContent = input.value
    divs.className = "task"
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-bars";
    divs.appendChild(icon)
    divs.appendChild(para)
    addTask.appendChild(divs)
    input.value = ""
    input.focus()
}

newtask.addEventListener("click", () => {
    addTasks()
    console.log("I was clicked")
})