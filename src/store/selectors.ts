import { Store, Task } from "./Types"

export const getTasks = (store: Store): Task[] => store.tasks
