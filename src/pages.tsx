import {
       Link,
       Outlet,
       useParams,
       useLocation,
       useNavigate,
       useSearchParams
} from "react-router-dom";
import { Tasks } from "./types/Tasks"

export const Todos = () => {
       const tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]")
       return (
              <div>
                     <h1>Todos!</h1>
                     <Link to="/">Main</Link>
                     <br />
                     {tasks.map((task: Tasks) => <div><Link to={task.id}>{task.value} </Link></div>)}

                     <Outlet />
              </div>
       );
};

export const Header = () => {
       return (
              <header>
                     <Link to="/">Main</Link>
                     <Link to="/profile">Profile</Link>
                     <Link to="/login">Auth</Link>
              </header>
       )

}

export const TodoById = () => {
       const { id } = useParams();
       const tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]")
       const task = tasks.find((task: Tasks) => task.id === id)

       return (
              <div>
                     <h1>Task id: {id}</h1>
                     <h1>Title: {task.value}</h1>
                     <h1>isDone: {task.isDone}</h1>
                     <Link to="/">Main</Link>
              </div>
       );
};

export const Profile = () => {
       return (
              <h1>Вы зерегистрированный пользователь</h1>
       )


}

export const NotFound = () => (
       <div>
              <h1>Задача не найдена</h1>
              <Link to="/">Вернуться на главную страницу</Link>
       </div>
);


