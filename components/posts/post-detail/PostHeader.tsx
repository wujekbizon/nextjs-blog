import styles from './PostHeader.module.css';
import Image from 'next/image';

const PostHeader = ({ title, image }: { title: string; image: string }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>{title}</h1>
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          style={{ width: '100%', height: 'auto' }}
        />
      </header>
      <div className={styles.divider} />
    </>
  );
};
export default PostHeader;
