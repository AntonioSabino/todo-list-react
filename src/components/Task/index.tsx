import styles from './styles.module.css'
import check from '../../assets/check.svg'
import trash from '../../assets/trash.svg'
import { ITask } from '@/App'

const UnCheckedButton = () => <button className={styles.unchecked}></button>

const CheckedButton = () => (
  <button className={styles.checked}>
    <img src={check} alt="check" />
  </button>
)

interface Props {
  task: ITask
  onDeleteTask: (id: string) => void
  onToggleTask: (id: string) => void
}

export default function Task({ task, onDeleteTask, onToggleTask }: Props) {
  return (
    <div className={styles.task}>
      <div onClick={() => onToggleTask(task.id)}>
        {task.isCompleted ? <CheckedButton /> : <UnCheckedButton />}
      </div>
      <p className={task.isCompleted ? styles.checked_text : ''}>{task.text}</p>
      <button
        className={styles.delete_button}
        onClick={() => {
          onDeleteTask(task.id)
        }}
      >
        <img src={trash} alt="delete" />
      </button>
    </div>
  )
}
