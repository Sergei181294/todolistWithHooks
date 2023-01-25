import { useState, useEffect } from "react"
import { Input } from "./common/input"
import { Button } from "./common/button"
import { Checkbox } from "./common/checkbox"
import { Radiogroup } from "./common/radiogroup"
import css from "./styles.module.css"




export const App = () => {

    const [inputValue, setInputValue] = useState("")
    const [tasks, setTasks] = useState<{ id: number, isDone: boolean, value: string }[]>([{ id: 1, isDone: false, value: "Выучить реакт" }])
    const [filter, setFilter] = useState("all")


    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks") ?? '[]');
        if (tasks.length) {
            setTasks(tasks)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])

    const addTaskHandler = () => {
        if (inputValue.trim().length === 0) {
            return alert('Не валидное имя задачи');
        }
        setTasks([...tasks, { id: tasks.length + 1, isDone: false, value: inputValue }]);
        setInputValue("");
    }

    const changeFilterHandler = (filter: string) => {
        setFilter(filter);
    }

    const toggleTaskHandler = (id: number) => {
        setTasks([...tasks.map((task) => task.id === id ? { ...task, isDone: !task.isDone } : task)]);
    }

    const deleteTaskHandler = (id: number) => {
        setTasks([...tasks.filter(task => task.id !== id)]);
    }

    const filters = [
        { id: '1', label: 'Все', value: 'all' },
        { id: '2', label: 'Сделать', value: 'make' },
        { id: '3', label: 'Сделано', value: 'made' },
    ];

    return (
        <div>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <Button onClick={addTaskHandler} children="Добавить задачу" />
            <Radiogroup onChange={changeFilterHandler} items={filters} name="filter" value={filter} />
            <ul className={css.list}>
                {tasks
                    .filter((task): boolean => {
                        if (filter === 'all') {
                            return true;
                        }

                        if (filter === 'make') {
                            return !task.isDone;
                        }
                        return task.isDone;
                    })
                    .map(task =>
                        <li key={task.id} className={css.item}>
                            <div className={css.itemBlock}>
                                <Checkbox checked={task.isDone} onChange={() => toggleTaskHandler(task.id)} />
                                {task.value}
                            </div>
                            {task.isDone && <Button className={css.alertBtn} onClick={() => deleteTaskHandler(task.id)} children="Удалить задачу" />}
                        </li>

                    )}
            </ul>
        </div>
    )
}
