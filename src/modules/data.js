let taskList = JSON.parse(localStorage.getItem("taskData")) || [];

export default function dataBase(el){
    const taskForm = new task(el.content.value, el.priority.value, el.dueDate.value)

    taskList.push(taskForm)
    localStorage.setItem("taskData", JSON.stringify(taskList));

}

//task object constructor
function task(title, priority, date) {
    this.title = title;
    this.priority = priority;
    this.date = date;
    this.complete = false;
    this.project = false;
}

