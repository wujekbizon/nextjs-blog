import styles from './PostItem.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { PostItemType } from '@/types/postsTypes'

const PostItem = (props: PostItemType & { index: number }) => {
  const { title, excerpt, image, date } = props?.data

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imagePath = `/images/posts/${props.slug}/${image}`

  return (
    <li className={`${props.index === 1 ? styles.special : ''} ${styles.post}`}>
      <Link className={styles.container} href={`/posts/${props.slug}`}>
        <div className={styles.image_container}>
          <Image className={styles.image} src={imagePath} alt={title} width={406} height={250} priority />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  )
}
export default PostItem
