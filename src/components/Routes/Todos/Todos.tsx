import { Link, Outlet} from "react-router-dom";
import { Tasks } from "../../../types/Tasks"

export const Todos = () => {
       const tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]")
       return (
              <div>
                     <h1>Todos!</h1>
                     <Link to="/">Main</Link>
                     <br />
                     {tasks.map((task: Tasks) => <div key = {task.id}><Link to={task.id}>{task.value} </Link></div>)}
              </div>
       );
};
