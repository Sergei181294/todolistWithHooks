import { Store, Action, TASKS_ACTIONS_TYPES } from "./Types"
import { v4 as uuidv4 } from 'uuid';

const initialStore: Store = {
       tasks: []
}


export const reducer = (store: Store = initialStore, action: Action): Store => {
       switch (action.type) {
              case (TASKS_ACTIONS_TYPES.SET_TASKS):
                     return { tasks: action.payload };
              case (TASKS_ACTIONS_TYPES.ADD_TASK):
                     return { tasks: [...store.tasks, { ...action.payload, id: uuidv4() }] };
              case (TASKS_ACTIONS_TYPES.DELETE_TASK):
                     return { tasks: store.tasks.filter((task) => task.id !== action.payload) };
              case (TASKS_ACTIONS_TYPES.CHANGE_TASK):
                     return { tasks: store.tasks.map((task) => task.id === action.payload.id ? { ...task, ...action.payload.task } : task) };
              default: return store;
       };

};
