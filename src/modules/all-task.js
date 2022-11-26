import data from "./data"

export default function loadPage(){
    //load content from data base
    eventHandler()



    function eventHandler(){
        const addTaskBtn = document.querySelector(".add-task")
        const addProjectBtn = document.querySelector(".add-project")

        addTaskBtn.addEventListener("click", ()=>{
            console.log("add task btn working")
        })

        addProjectBtn.addEventListener("click", ()=> {
            console.log("add project btn working")
        })
    }
}