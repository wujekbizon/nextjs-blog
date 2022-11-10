import styles from './PostItem.module.css';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { PostItemType } from '../../types/postsTypes';

const PostItem = (props: PostItemType) => {
  const { title, excerpt, image, date } = props.data;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${props.slug}/${image}`;

  return (
    <li className={`${styles.post} gradient__container`}>
      <Link href={`/posts/${props.slug}`}>
        <div className={styles.image}>
          <Image
            src={imagePath}
            alt={title}
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
        <div className={styles.content}>
          <div className="gradient__text" />
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};
export default PostItem;
