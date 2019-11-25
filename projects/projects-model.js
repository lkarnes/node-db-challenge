const db = require('../dbConfig.js');

module.exports = {
    addRes,
    addPro,
    getRes,
    getPro,
    addTask,
    getTask
}

function addPro(project) {
    return db("projects").insert(!project.completed ? {...project, completed: 0} :project)
}

function addRes(resource) {
    return db("resources").insert(resource)
}

function getRes() {
    return db("resources")
}

function getPro() {
    const projects = db("projects");
    return projects.map(project => {
        if(project.completed === 0) {
            return {
                ...project,
                completed: false
            }
        }else{
            return {
                ...project,
                completed: true
            }
        }
    })
}

function addTask(task) {
    return db("tasks").insert(!task.completed ? {...task , completed: false} :task)
}

function getTask() {
    const tasks = db("tasks")
    return tasks.map(task => {
        if(task.completed === 0){
            return {
                ...task,
                completed: false
            }
        }else{
            return {
                ...task,
                completed: true
            }   
        }
        
    })
}