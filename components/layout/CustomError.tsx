import styles from './CustomError.module.css'
import Link from 'next/link'

const CustomError = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return (
    <aside className={styles.error_container}>
      <h2>There was a problem</h2>
      <h1>{error.message}</h1>
      <p>Please try again later or contact support if the problem persists.</p>
      <div className={styles.btns}>
        <button className={styles.btn_connect} onClick={reset}>
          Try again
        </button>
        <Link className={styles.back} href="/">
          Go back
        </Link>
      </div>
    </aside>
  )
}
export default CustomError
