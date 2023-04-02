import styles from './PostHeader.module.css'
import Image from 'next/image'

const PostHeader = ({ title, image }: { title: string; image: string }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>{title}</h1>
        <div className={styles.image_container}>
          <Image src={image} alt={title} width={500} height={500} />
        </div>
      </header>
      <div className={styles.divider} />
    </>
  )
}
export default PostHeader
