import styles from './MainNavigation.module.css';
import Logo from './Logo';
import Link from 'next/link';

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="https://g-w.vercel.app/" target="_blank">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
