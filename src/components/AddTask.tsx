import { useState, type FormEvent } from "react"
import type { Task } from "../App";

interface AddTaskProps {
    tasks: Task[];
    setTasks:  React.Dispatch<React.SetStateAction<Task[]>>; 
}

export const AddTask = ({tasks, setTasks}: AddTaskProps) => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleReset = () => {
        setInputValue('');
    }

    const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const task: Task = {
            id: Math.floor(Math.random() * 10001),
            name: inputValue,
            completed: false
        }
        setTasks([...tasks, task]);
    }

  return (
    <>
    <form onSubmit={handleSubmitForm}>
        <input onChange={(event) => setInputValue(event.target.value) } value={inputValue} type="text" placeholder="enter task"/>
        <span onClick={() => handleReset()}>Reset</span>
        <button type="submit">Add Task</button>
    </form>
    <p>{inputValue}</p>
    </>
  )
}
