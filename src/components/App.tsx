import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Input, Button, Checkbox, Radiogroup } from "./common"
import { Task } from "../store/Types"
import css from "./styles.module.css"
// import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom"
import { getTasks } from "../store/selectors"
import { setTasks, addTasks, deleteTask, changeTask } from "../store/actionCreators"



const filters = [
    { id: '1', label: 'Все', value: 'all' },
    { id: '2', label: 'Сделать', value: 'make' },
    { id: '3', label: 'Сделано', value: 'made' },
];


export const App = () => {

    const [inputValue, setInputValue] = useState("")
    // const [tasks, setTasks] = useState<Task[]>([])
    const [filter, setFilter] = useState("all")

    const [editedId, setEditedId] = useState<string | null>(null)
    const [editedValue, setEditedValue] = useState("")

    const dispatch = useDispatch();

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");
        if (tasks.length) {
            dispatch(setTasks(tasks))
        }
    }, [ dispatch ])

    const tasks = useSelector(getTasks)

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])

    const addTaskHandler = () => {
        if (inputValue.trim().length === 0) {
            return alert('Не валидное имя задачи');
        }
        dispatch(addTasks({value: inputValue, isDone: false}))
        setInputValue("");

    }

    const toggleTaskHandler = (id: Task["id"], isDone: Partial<Task>) => {
        // setTasks((prevTasks) => [...prevTasks.map((task) => task.id === id ? { ...task, isDone: !task.isDone } : task)]);(
        dispatch(changeTask(id, isDone))
    }

    const deleteTaskHandler = (id: Task["id"]) => {
        dispatch(deleteTask(id))
    }

    const onEditStart = (id: string) => {
        setEditedId(id)
        const task = tasks.find((task) => task.id === id);
        setEditedValue(task!.value);
    }

    const onEditEnd = () => {
        dispatch(setTasks(tasks))
        setEditedId(null)

    }

    return (
        <div>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <Button onClick={addTaskHandler}>Добавить задачу</Button>
            <Radiogroup onChange={setFilter} items={filters} value={filter} />
            <ul className={css.list}>
                {tasks
                    .filter((task): boolean => {
                        if (filter === 'all') {
                            return true;
                        }
                        return filter === 'make' ? !task.isDone : task.isDone
                    })
                    .map((task) =>
                        <li key={task.id} className={css.item}>
                            <div className={css.itemBlock}>
                                <Checkbox checked={task.isDone} onChange={() => toggleTaskHandler(task.id)} />
                                {editedId === task.id ?
                                    (<Input className={css.editInput} onChange={(e) => setEditedValue(e.target.value)} value={editedValue} />)
                                    : (<span>{task.value}</span>)}
                            </div>
                            <div>
                                {editedId !== task.id && <Button onClick={() => onEditStart(task.id)}>Редактировать</Button>}
                                {editedId === task.id && <Button onClick={onEditEnd}>Сохранить</Button>}
                            </div>
                            {task.isDone && <Button className={css.alertBtn} onClick={() => deleteTaskHandler(task.id)}>Удалить задачу</Button>}
                        </li>

                    )}
            </ul>
            <Link to="/tasks" className={css.taskLink}>Перейти к задачам</Link>
        </div>
    )
}
