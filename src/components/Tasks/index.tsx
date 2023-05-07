import Task from '../Task'
import styles from './styles.module.css'

export default function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.tasks__header}>
        <div>
          <h2>Tarefas criadas</h2>
          <span>10</span>
        </div>
        <div>
          <h2>Tarefas concluídas</h2>
          <span>2 de 10</span>
        </div>
      </header>
      <div className={styles.tasks__list}>
        <Task />
        <Task />
      </div>
    </section>
  )
}
