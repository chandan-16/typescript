// export interface Task {
//   id: number;
//   name: string;
//   completed: boolean
// }

// import { useState } from 'react'
import './App.css'
import { LoginPage } from './pages/LoginPage'
// import { Interface } from './components/Interface'
// import { AddTask } from './components/AddTask'
// import { Day1 } from './components/Day1'
// import { Day2 } from './components/Day2'
// import { TaskList } from './components/TaskList'
// import type { Task } from './types/task';
// import { Header } from './components/Header';
// import { Interface2 } from './components/Interface2';
// import { UserCard } from './components/UserCard';


function App() {

  // const [tasks, setTasks] = useState<Task[]>([
  //   {id: 10001, name: 'Learn Frontend Development', completed: true},
  //   {id: 10002, name: 'Learn Backend Development', completed: false},
  // ]);

  return (
    <>
      {/* <Day1 />
      <Day2 />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} /> */}
      {/* <Header />  */}
      {/* <Interface /> */}
      {/* <Interface2/> */}
      {/* <UserCard name="samyak gautam" age={26} city="pune" /> */}
      <LoginPage />
    </>
  )
}

export default App
