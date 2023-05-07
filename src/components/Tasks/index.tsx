import { ITask } from '@/App'
import Task from '../Task'
import styles from './styles.module.css'

interface Props {
  tasks: ITask[]
  onDeleteTask: (id: string) => void
  onToggleTask: (id: string) => void
}

export default function Tasks({ tasks, onDeleteTask, onToggleTask }: Props) {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <section className={styles.tasks}>
      <header className={styles.tasks__header}>
        <div>
          <h2>Tarefas criadas</h2>
          <span>{totalTasks}</span>
        </div>
        <div>
          <h2>Tarefas concluídas</h2>
          <span>
            {completedTasks} de {totalTasks}
          </span>
        </div>
      </header>
      <div className={styles.tasks__list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
      </div>
    </section>
  )
}
