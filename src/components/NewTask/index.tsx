import styles from './styles.module.css'
import plus from '../../assets/plus.svg'
import { useState } from 'react'

interface Props {
  onAddTask: (text: string) => void
}

export default function NewTask({ onAddTask }: Props) {
  const [text, setText] = useState<string>('')
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!text) {
      return
    }

    onAddTask(text)
    setText('')
  }
  
  return (
    <div className={styles.container}>
      <form className={styles.task_form} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <button>
          Criar
          <img src={plus} alt="Criar tarefa" />
        </button>
      </form>
    </div>
  )
}
