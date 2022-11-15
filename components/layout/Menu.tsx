import Link from 'next/link';
import styles from './Menu.module.css';

const Menu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <ul className={styles.list}>
      <li onClick={() => closeMenu()}>
        <Link href="/posts">Posts</Link>
      </li>
      <li onClick={() => closeMenu()}>
        <Link href="/contact">Contact</Link>
      </li>
      <li onClick={() => closeMenu()}>
        <Link href="https://g-w.vercel.app/" target="_blank">
          Portfolio
        </Link>
      </li>
    </ul>
  );
};
export default Menu;
