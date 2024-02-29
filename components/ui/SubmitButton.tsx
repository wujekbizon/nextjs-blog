import styles from './SubmitButton.module.css'
import { useFormStatus } from 'react-dom'

type SubmitButtonProps = {
  label: string
  loading: React.ReactNode
}

const SubmitButton = ({ label, loading }: SubmitButtonProps) => {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} className={styles.submit_btn}>
      {pending ? loading : label}
    </button>
  )
}
export default SubmitButton
