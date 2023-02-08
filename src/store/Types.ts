export interface Task {
       id: string;
       isDone: boolean;
       value: string;
}

export interface Store {
       tasks: Task[];
}

export enum TASKS_ACTIONS_TYPES {
       SET_TASKS = "SET_TASKS",
       ADD_TASK = "ADD_TASK",
       DELETE_TASK = "DELETE_TASK",
       CHANGE_TASK = "CHANGE_TASK"
}

export type SET_TASKS_ACTION = {type: TASKS_ACTIONS_TYPES.SET_TASKS, payload: Task[]}
export type ADD_TASK_ACTION = {type: TASKS_ACTIONS_TYPES.ADD_TASK, payload: Omit<Task, "id">}
export type DELETE_TASK_ACTION = {type: TASKS_ACTIONS_TYPES.DELETE_TASK, payload: Task["id"]}
export type CHANGE_TASK_ACTION = {type: TASKS_ACTIONS_TYPES.CHANGE_TASK, payload: {id: Task["id"], task: Omit<Partial<Task>, "id">}}

export type Action = SET_TASKS_ACTION | ADD_TASK_ACTION | DELETE_TASK_ACTION | CHANGE_TASK_ACTION
