import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">LUMA FASHION</Link>
                </div>
                <nav className={styles.nav}>
                    <Link href="#collections" className={styles.link}>Collections</Link>
                    <Link href="#concept" className={styles.link}>Concept</Link>
                    <Link href="#" className={styles.link}>About</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
