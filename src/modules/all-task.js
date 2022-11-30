import dataBase from "./data"
import projects from "./projects"

export default function loadPage(){
    renderContent()
    DOMHandler()
}

function DOMHandler(){
    const addTaskBtn = document.querySelector(".add-task")
    const addProjectBtn = document.querySelector(".add-project")
    const formModal = document.querySelector(".form-modal")
    const closeTab = document.querySelector(".fa-times")
    const projectForm = document.querySelector(".add-project-form")
    const addTaskForm = document.querySelector("#add-task-form")


    addTaskBtn.addEventListener("click", ()=>{
        formModal.style.display = "flex";
    })

    closeTab.addEventListener("click", ()=>{
        formModal.style.display = "none"
    })

    addProjectBtn.addEventListener("click", ()=> {
        if (projectForm.style.display=="none"){
            projectForm.style.display="block"
        } else {
            projectForm.style.display="none"
        }
    })

    addTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let el = e.target.elements;
        if (!el.content.value){
            alert(`Content cannot be empty`)
            return
        } else if (!el.dueDate.value){
            alert(`Due Date cannot be empty`)
            return
        } else if (!el.priority.value){
            alert(`Priority cannot be empty`)
            return
        } else {
            dataBase(el)
            e.target.reset();
            formModal.style.display = "none"
            renderContent()
        }
    })
}
function renderContent(){
    const taskContents = document.querySelector(".task-list")

    //reset task list DOM
    taskContents.innerHTML=""

    //get tasklist from local storage
    let taskList = JSON.parse(localStorage.getItem("taskData")) || [];
    taskList.forEach((task)=>{
        taskContents.innerHTML+= `
            <div class="task-item">
                <input type="checkbox">
                <div class="task-content">
                    <input type="date" class="date" value="${task.date}" readonly>
                    <input type="text" value="${task.title}" class="item" readonly>
                </div>
                <div class="actions">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            </div>
        `
        const delBtn = document.querySelectorAll(".delete")
        
        delBtn.forEach((btn) => {
            btn.addEventListener("click", ()=>{
                taskList = taskList.filter(t => t != task);
                localStorage.setItem("taskData", JSON.stringify(taskList));
                renderContent()
            })
        }) 
    })
}



