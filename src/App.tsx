import { useState } from 'react'
import Header from './components/Header'
import NewTask from './components/NewTask'
import Tasks from './components/Tasks'

export interface ITask {
  id: string
  text: string
  isCompleted: boolean
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  const addTask = (text: string) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
  }

  const deleteTask = (id: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    setTasks(filteredTasks)
  }

  const toggleTask = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })

    setTasks(updatedTasks)
  }

  return (
    <>
      <Header />
      <NewTask onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
      />
    </>
  )
}

export default App
