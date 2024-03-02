import styles from './FieldError.module.css'
import { FormState } from '@/types/actionTypes'

type FieldErrorProps = {
  formState: FormState
  name: string
}

const FieldError = ({ formState, name }: FieldErrorProps) => {
  return (
    <div className={`${formState.status === 'ERROR' && styles.error_active}  ${styles.error_container}`}>
      <span className={styles.error}>{formState.fieldErrors[name]?.[0]}</span>
    </div>
  )
}

export default FieldError
