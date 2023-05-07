import styles from './styles.module.css'
import plus from '../../assets/plus.svg'

export default function NewTask() {
  return (
    <div className={styles.container}>
      <form className={styles.task_form}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <img src={plus} alt="Criar tarefa" />
        </button>
      </form>
    </div>
  )
}
