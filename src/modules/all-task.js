import data from "./data"
import projects from "./projects"

export default function loadPage(){
    //load content from data base
    DOMHandler()



    function DOMHandler(){
        const addTaskBtn = document.querySelector(".add-task")
        const addProjectBtn = document.querySelector(".add-project")
        const formModal = document.querySelector(".form-modal")
        const closeTab = document.querySelector(".fa-times")
        const projectForm = document.querySelector(".add-project-form")

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
    }
}
