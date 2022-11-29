export default function dataBase(){
    taskList = JSON.parse(localStorage.getItem("taskData"))
    projectList = JSON.parse(localStorage.getItem("projectData"))
    /*
    task[{
            title: string,
            desc: string,
            priority: string,
            date: date,
            complete: boolean,
            project: string,
        }]
    */
    let taskList = [];

    /*
    projectList["project A", "project B"]
    */
    let projectList = [];

    getLocalStorage()
}

const getLocalStorage = () => {
    //task & project .push(localstorage) 
}

