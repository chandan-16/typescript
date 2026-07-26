import { useState } from "react";
import type { Task } from "../App";

interface TaskListProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskList = ({tasks, setTasks}: TaskListProps) => {

    const [show, setShow] = useState<boolean>(false);

    const handleDelete = (id: number) => {
        setTasks((previousTask) => previousTask.filter((task) => task.id !== id));
    }

  return (
    <div>
        <h1>Task List:</h1>
        <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
        {
            show && tasks.map((task) => (
                <li key={task.id}>
                    <span>{task.id}</span> - {task.name}
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </li>
            ))
        }
    </div>
  )
}
