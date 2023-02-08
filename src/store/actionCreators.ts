import {SET_TASKS_ACTION, DELETE_TASK_ACTION, ADD_TASK_ACTION, CHANGE_TASK_ACTION, TASKS_ACTIONS_TYPES, Task } from "./Types"

export const setTasks = (tasks: Task[]): SET_TASKS_ACTION => {
       return {type: TASKS_ACTIONS_TYPES.SET_TASKS, payload: tasks}
}

export const addTasks = (task: Omit<Task, "id">): ADD_TASK_ACTION => {
       return {type: TASKS_ACTIONS_TYPES.ADD_TASK, payload: task}
}

export const deleteTask = (id: Task["id"]): DELETE_TASK_ACTION => {
       return {type: TASKS_ACTIONS_TYPES.DELETE_TASK, payload: id}
}

export const changeTask = (id: Task["id"], task: Omit<Partial<Task>, "id">): CHANGE_TASK_ACTION => {
       return {type: TASKS_ACTIONS_TYPES.CHANGE_TASK, payload: {id, task}}
}
