import { useParams } from "react-router-dom";
import { Task } from "../../../store/Types"


export const TodoById = () => {
       const { id } = useParams();
       const tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]")
       const task = tasks.find((task: Task) => task.id === id)

       return (
              <div>
                     <h1>Task id: {id}</h1>
                     <h1>Title: {task.value}</h1>
                     <h1>isDone: {task.isDone}</h1>
              </div>
       );
};
