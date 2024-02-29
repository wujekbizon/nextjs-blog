import Link from 'next/link'
import styles from './ModalLink.module.css'
import { ModalLinksProps } from '@/types/linksTypes'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const ModalLink: React.FC<ModalLinksProps> = ({ title, href, imageUrl, onCloseHandler, text }) => {
  const path = usePathname()

  return (
    <li onClick={onCloseHandler} className={styles.modal_links}>
      <Link className={styles.link} href={href}>
        <div className={styles.image_container}>
          <Image className={styles.image} src={imageUrl} alt={title} width={650} height={350} priority />
        </div>
        <div className={path === href ? `${styles.content} ${styles.activeBg}` : `${styles.content}`}>
          <h2 className={path === href ? `${styles.active}` : ''}>{title}</h2>
          <p>{text}</p>
        </div>
      </Link>
    </li>
  )
}
export default ModalLink
