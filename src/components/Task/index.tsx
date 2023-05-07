import styles from './styles.module.css'
import check from '../../assets/check.svg'
import trash from '../../assets/trash.svg'
import { useState } from 'react'

interface CheckClick {
  handleClick: () => void
}

const UnCheckedButton = ({ handleClick }: CheckClick) => (
  <button className={styles.unchecked} onClick={handleClick}></button>
)

const CheckedButton = ({ handleClick }: CheckClick) => (
  <button className={styles.checked} onClick={handleClick}>
    <img src={check} alt="check" />
  </button>
)

export default function Task() {
  const [checked, setChecked] = useState<boolean>(false)

  const handleCheck = () => {
    setChecked(!checked)
  }

  return (
    <div className={styles.task}>
      {checked ? (
        <CheckedButton handleClick={handleCheck} />
      ) : (
        <UnCheckedButton handleClick={handleCheck} />
      )}
      <p className={checked ? styles.checked_text : ''}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis
        beatae delectus reprehenderit minima! Laboriosam eligendi, delectus,
        magnam dolorem ut repellendus quibusdam fugit nulla praesentium quae ab
        soluta pariatur ipsam?
      </p>
      <button className={styles.delete_button}>
        <img src={trash} alt="delete" />
      </button>
    </div>
  )
}
